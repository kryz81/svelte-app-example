export const login = user => {
  localStorage.setItem('user', user);
  window.location.reload(true);
};

export const logout = () => {
  localStorage.removeItem('user');
  window.location.reload(true);
};
