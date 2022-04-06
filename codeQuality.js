// level 2

const getUsers = async () => {
  const [user, Profile, p] = await Promise.all(
    getUser(),
    getProfile(),
    getPosts()
  );
  return {
    user: user,
    profile: Profile,
    posts: p,
  };
};
