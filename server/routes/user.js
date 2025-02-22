const express = require('express');
const { User, Blog, Comments, Notifications } = require("../db");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { SECRET } = require("../middleware/auth");
const { authenticateJwt } = require("../middleware/auth");

const router = express.Router();


router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;


        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }


        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(402).json({ message: "User already exists" });
        }


        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { password, email } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(404).json({ message: 'Invalid password' });
            }
            const token = jwt.sign({ userId: user._id, role: 'user' }, SECRET, { expiresIn: '1d' });
            return res.status(200)
                .cookie("accessToken", token, { httpOnly: true, secure: true })
                .json({ message: 'Login successful', token });
        }
        return res.status(403).json({ message: 'User not Found' });
    } catch (error) {
        console.log(error);

    }
});

router.get("/logout", authenticateJwt, async (req, res) => {
    try {
        if (req?.user) {
            return res.status(200)
                .clearCookie("accessToken", { httpOnly: true, secure: true })
                .json({ message: "Log out successfully" })
        }
    } catch (error) {
        return res.status(400).json({ message: "Unable to log out" })
    }
})

router.get('/check-auth', authenticateJwt, async (req, res) => {
    try {
        let isAuthenticated;
        if (req.user) isAuthenticated = true;
        else isAuthenticated = false;

        return res.status(200)
            .json({ isAuthenticated })
    } catch (error) {

    }
})

router.post('/write', async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        return res.json({ message: 'Blog added successfully', blogId: blog._id.toString() });
    } catch (error) {
        console.error('Error adding blog:', error);
        return res.status(500).json({ error: 'Failed to add blog' });
    }
});

router.put('/edit/:blogId', authenticateJwt, async (req, res) => {
    const blog = await Blog.findByIdAndUpdate(req.params.blogId, req.body, { new: true });
    if (blog) {
        return res.json({ blog: 'Blog updated successfully' });
    }
    else {
        return res.status(404).json({ message: 'Blog not found' });
    }

});

router.get('/view', authenticateJwt, async (req, res) => {
    const blog = await Blog.find({});
    return res.json({ blog });
});

router.delete('/delete/:blogId', authenticateJwt, async (req, res) => {
    const blog = await Blog.findByIdAndDelete(req.params.blogId);
    return res.json({ blog: 'Blog deleted successfully' });
})

router.post('/comment/:postId', authenticateJwt, async (req, res) => {
    let response = { success: false, message: "" };
    try {
        const userId = req.user.userId
        const { text, parentComment } = req.body;
        if (!text) {
            response.message = "Please add Comment"
            return res.status(400).json(response);
        }
        const newComment = new Comments({
            postId: req.params.postId,//i have made a manual class because i need to store the postID ,which is sended
            //not by the client ,but in params ,so i need to retrive it from it ,than store it 
            userId,
            text,
            parentComment
        });
        await newComment.save().then((result) => {
            if (result) {
                response.success = true;
                response.message = "Comment added Successfully";
                return res.status(200).json(response);
            }
        }
        )
            .catch((err) => {
                console.log(err)
                response.message = "Failed to add Comment";
                return res.status(400).json(response);
            })

        if (parentComment) {
            const parent = await Comments.findOne({ _id: parentComment })
            const newNotification = new Notifications({
                recipient: parent._id,
                sender: userId,
                message: text,
            })
            await newNotification.save()
        }

    } catch (error) {
        console.error(error);
        response.message = "something went wrong, Please Try Again"
        return res.status(500).json(response);
    }
});

router.put('/comment/update/:id', authenticateJwt, async (req, res) => {
    let response = { success: false, message: "" };
    try {
        const userId = req.user.userId
        const { id } = req.params
        const { text, isRead } = req.body;
        if (!text) {
            return res.status(400).json({ error: "Please add Comment" });
        }
        const updatedComment = {
            text,
            isRead
        }
        const comment = await Comments.findOneAndUpdate({ _id: id, userId: userId }, updatedComment, {
            new: true,
        }).then((result) => {
            if (result) {
                response.success = true;
                response.message = "Comment Updated Successfully";
                return res.status(200).json(response);
            }
        }

        ).catch((err) => {
            console.log(err)
            response.message = "Failed to update Comment";
            return res.status(400).json(response);
        })
        if (comment.parentComment) {
            await Notifications.updateOne({
                message: `edited: ${text}`
            })
        }
    } catch (error) {
        console.error(error);
        response.message = "something went wrong, Please Try Again"
        return res.status(500).json(response);
    }
});

router.delete('/comment/:id', authenticateJwt, async (req, res) => {
    let response = { success: false, message: "" };
    try {
        const userId = req.user.userId
        const { id } = req.params

        const comment = await Comments.findOneAndDelete({ _id: id, userId: userId }).then((result) => {
            if (result) {
                response.success = true;
                response.message = "Comment Deleted Successfully";
                return res.status(200).json(response);
            }
        }

        ).catch((err) => {
            console.log(err)
            response.message = "Failed to Delete Comment";
            return res.status(400).json(response);
        })
        if (!comment.parentComment) {
            await Comments.deleteMany({ parentComment: id })
            await Notifications.deleteMany({ recipient: userId })
        }
    } catch (error) {
        console.error(error);
        response.message = "something went wrong, Please Try Again"
        return res.status(500).json(response);
    }
});

router.get('/comment/:postId', authenticateJwt, async (req, res) => {
    let response = { success: false, message: "", data: [] };
    try {
        const userId = req.user.userId
        const { postId } = req.params

        const comments = await Comments.find({ postId: postId, userId: userId, parentComment: null })
        response.success = true;
        response.data = comments
        response.message = "Comments Fetched Successfully";
        return res.status(200).json(response);

    } catch (error) {
        console.error(error);
        response.message = "something went wrong, Please Try Again"
        return res.status(500).json(response);
    }
});

module.exports = router;
