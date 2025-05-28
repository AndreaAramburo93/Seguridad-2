import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const USUARIO_FAKE = {
  username: "admin",
  password: bcrypt.hashSync("1234", 10), // simula la base de datos
};

const SECRET = "clave-supersecreta-123"; // nunca lo pongas así en prod

export function login(username, password) {
  if (
    username === USUARIO_FAKE.username &&
    bcrypt.compareSync(password, USUARIO_FAKE.password)
  ) {
    const token = jwt.sign({ user: username }, SECRET, { expiresIn: "1h" });
    return { token };
  }
  throw new Error("Credenciales inválidas");
}

export function verificarToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}
