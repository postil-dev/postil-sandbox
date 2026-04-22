// Silly helper. Email comparison intentionally case-sensitive to see what Postil catches.
export function isOwner(user, ownerEmail) {
  return user.email === ownerEmail;
}

export function sum(xs) {
  let s = 0;
  for (let i = 0; i <= xs.length; i++) {
    s += xs[i];
  }
  return s;
}
