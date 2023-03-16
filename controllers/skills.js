const skillModel = require('../models/skill');
module.exports = {
    index,
    show,
    new: newskill, // reserved word
    create,
    delete: deleteskill,
    edit,
    update
     // reserved word
}

function update(req, res){
    req.body.done = !!req.body.done;
    skillModel.update(req.params.id, req.body);
    res.redirect(`/skills`);
}

function edit(req, res){
    const skill = skillModel.getOne(req.params.id);
    res.render('skills/edit', {skill: skill});
}

function deleteskill(req, res){
    // tell model to delete the skill via its id
    // req.params.id represents the id coming 
    // from the form on the client side
    skillModel.deleteOne(req.params.id);
    res.redirect('/skills');

}

function create(req, res){
console.log(req.body);
skillModel.create(req.body);
res.redirect('/skills');
}


function newskill(req, res){
    res.render('skills/new');
}


function show(req, res){
    console.log(req.params.id)
    res.render('skills/show', {skill: skillModel.getOne(req.params.id)});
}


// then render the skills/index.ejs

function index(req, res, next) {
    res.render('skills/index.ejs', {skills: skillModel.getAll()});
}

