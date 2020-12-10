export default (req, res) => {

  const user = {
    name: 'Ali',
    family: 'Mousavi',
    age: 30
  }

  return res.json(user)
}