const { User, Post } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


 const resolvers = {
  Query: {
    posts: async () => {
      return await Post.find();
    },
  },


  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addPost: async (parent, args, context) => {
      const newPost = await Post.create(args);
      return newPost;
    },

    updatePost: async (parent, { _id, title, content}) => {
      const updatePost = await Post.findByIdAndUpdate(
        { _id: _id },
        { title: title, content: content},
        { new: true }
      )
      return updatePost;
    },

    deletePost: async (parent, { _id }) => {
        const deletePost = await Post.findByIdAndDelete(_id)
      return deletePost;
    },
  },
};

module.exports = resolvers;