import inquirer from 'inquirer';
async function wordCounter() {
    const { paragraph } = await inquirer.prompt([
        {
            type: 'input',
            name: 'paragraph',
            message: 'Enter an English paragraph:',
            validate: (input) => input.trim().length > 0 || 'Please enter a paragraph.',
        },
    ]);
    const characters = paragraph.replace(/\s/g, '').length;
    const words = paragraph.trim().split(/\s+/).length;
    console.log(`Character count: ${characters}`);
    console.log(`Word count: ${words}`);
}
wordCounter();
