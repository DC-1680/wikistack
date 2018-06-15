const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

// const Pug = db.define('pugs', {
//     name: Sequelize.STRING,
//     cute: Sequelize.BOOLEAN,
//     age: Sequelize.INTEGER,
//     bio: Sequelize.TEXT
//   })

const Page = db.define('page', {
    title: Sequelize.STRING, // the page's title
    slug: Sequelize.STRING, // a url-safe version of the page title, for links
    content: Sequelize.TEXT, //	the page content
    status: Sequelize.ENUM('open', 'closed') //	if the page is open or closed

});

const User = db.define('user', {
    name: Sequelize.STRING, //	full name of the user
    email: Sequelize.STRING // 	a unique, identifying email address
});

module.exports = {db, Page, User};
