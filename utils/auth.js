const USERS_DB = [
  { username: 'super1', password: 'Super123!', role: 'superusuario', name: 'Carlos Mendoza' },
  { username: 'super2', password: 'Super456!', role: 'superusuario', name: 'Ana García' },
  { username: 'admin1', password: 'Admin123!', role: 'admin', name: 'Luis Torres' },
  { username: 'admin2', password: 'Admin456!', role: 'admin', name: 'María López' },
  { username: 'user1', password: 'User123!', role: 'usuario', name: 'Pedro Sánchez' },
  { username: 'user2', password: 'User456!', role: 'usuario', name: 'Laura Martínez' }
];

function authenticateUser(username, password) {
  const user = USERS_DB.find(u => u.username === username && u.password === password);
  if (user) {
    const userData = { ...user };
    delete userData.password;
    localStorage.setItem('currentUser', JSON.stringify(userData));
    return userData;
  }
  return null;
}

function getCurrentUser() {
  const userData = localStorage.getItem('currentUser');
  return userData ? JSON.parse(userData) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}