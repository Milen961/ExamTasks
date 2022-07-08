function solve(filePath){
     
    let fileNameIndexStartAt = filePath.lastIndexOf('\\') +1
    let fileExtentionStart = filePath.lastIndexOf('.') +1
    let fileNameIndexEnd = fileExtentionStart -1;
    let fileName = filePath.substring(fileNameIndexStartAt, fileNameIndexEnd);
    let fileExtentin = filePath.substring(fileExtentionStart)
     console.log(`File name: ${fileName}`);
     console.log(`File extension: ${fileExtentin}`) 
}
solve('C:\\Internal\\training-internal\\Template.pptx')
