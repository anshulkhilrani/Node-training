const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.version('1.1.0')

// add, remove, read, list

// create add command

yargs.command({
    command: 'add',
    describe: 'Add a new Note!',
    handler: function () {
        console.log("add a new note")
    }
})


// create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a new Note!',
    handler: function () {
        console.log("remove a note")
    }
})


// create read command

yargs.command({
    command: 'read',
    describe: 'Read a Note!',
    handler: function () {
        console.log("Read a new note")
    }
})


// create list command

yargs.command({
    command: 'list',
    describe: 'List all of the notes!',
    handler: function () {
        console.log("Listing all the notes.")
    }
})



console.log(yargs.argv)
