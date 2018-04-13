/* eslint-disable consistent-return, func-names */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/,
      min: 8,
      max: 20
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
      required: true
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
      required: true
    }
  },
  { timestamps: true }
);

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const saltRounds = 10;
  bcrypt.hash(this.password, saltRounds).then((hash) => {
    this.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password).then(res => cb(res));
};

export default mongoose.model('User', userSchema);
