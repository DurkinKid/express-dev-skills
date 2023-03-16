const skills = [
  {id: 125223, skill: 'Yodeling', done: true},
  {id: 127904, skill: 'The Force', done: true},
  {id: 139608, skill: 'Defeating My Enemies', done: true}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, skillUpdate){
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  let skill = skills[idx];
  skill = {
      ...skill,
      ...skillUpdate
  }
  skills.splice(idx, 1, skill);
}

function deleteOne(id) {
  // Find the index based on the id of the skill object
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  // New skills wouldn't be done :)
  skill.done = false;
  skills.push(skill);
}

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id));
}
