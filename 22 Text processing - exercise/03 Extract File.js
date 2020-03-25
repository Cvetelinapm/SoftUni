function solve(text){
let arrText = text.split('\\');
for (const line of arrText) {
    if(line.includes('.')){
        let splited = line.split('.');
        let extension = splited.pop();
        let fileName = splited.join('.')
        
            console.log(`File name: ${fileName}`);
            console.log(`File extension: ${extension}`)
        
    }
}
}
solve('C:\\Projects\\Data-Structures\\LinkedList.sfs.cs')