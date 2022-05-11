const { json } = require("stream/consumers");

text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac hendrerit dolor, ac rutrum arcu. Nam ut ante congue,'+
'commodo est nec, laoreet dolor. Phasellus efficitur urna ut pellentesque consequat. Nulla facilisi. Integer elementum euismod nisl quis'+
'mattis. Nulla feugiat eget purus at rhoncus. Quisque quis nibh tortor. Phasellus varius ultricies sapien, vel tincidunt odio bibendum a.'+
'Morbi turpis felis, pharetra a diam ut, porta ultricies tortor. Etiam vitae maximus nisl. Maecenas vulputate vulputate luctus. Vivamus ac'+
 'consequat lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
textLong = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget.
 In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna.
 Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus
 faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In
 vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet
 hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.`;
 text2 = 'The quick brown fox jumped over the lazy dog';
 sampleText1 = '123 45 6';
justify(textLong, 15);
function justify(text, width) {
    let currentLine = [];
    const words = text.split(' ');
    console.log("words length = " + words.length)
    console.log("text length = " + text.length);
    console.log("width = " + width);
    console.log(JSON.stringify(text));
    if(words.length == 0 || text.length <= width) return text;
    const newText = [];
    let length = 0;

    if(text.length == 0) return '';
    for(let i = 0; i < words.length; i++){
        word = words[i];
        console.log(JSON.stringify(word));
        if(length + word.length > width){       
            if(currentLine.length == 1){
                currentLine[currentLine.length-1] = currentLine[currentLine.length-1].trimEnd();//Remove space from the last word
                currentLine.push('\n');                
                newText.push(currentLine.join(''));
                console.log('Pushed 1 ' + currentLine.join(''))
            }
            else{
                console.log("Evaluating: " + currentLine.join(''));
                newText.push(evalutateLine(currentLine,width));
                console.log('Pushed 2 ' + currentLine.join(''))
            }
            currentLine = [];
            length = 0;
        }
        currentLine.push(word + ' ');
        length += word.length + 1;
        //Adding plus 1 because of space
        if(length == width + 1){
            currentLine[currentLine.length-1] = currentLine[currentLine.length-1].trimEnd();//Remove space from the last word
            if(i != words.length-1)currentLine.push('\n');
            newText.push(currentLine.join(''));
            console.log('Pushed 3 ' + currentLine.join(''))
            currentLine = [];
            length = 0;
        }
        if(i == words.length-1){
            let s = currentLine.join('');
            s = s.substring(0,s.length-1)//remove the space at the end
            if(s.length > 0){                
                console.log('Pushed 3 ' + currentLine.join(''))
                newText.push(s);
            }            
        }       
    }
    console.log('lines = '+ newText.length);
    console.log('\nresult')
    console.log('=============================================');
   [...newText].forEach(s=>{
        console.log(JSON.stringify(s) + "\n");
    });
    //console.log(newText.join(''));
    console.log('=============================================');
    return newText.join('');
  }
function evalutateLine(words, width){    
    let lastWasSpace = false;
    let wordsCombined = '';
    [...words].forEach(word =>{
        wordsCombined += word;
    })
    wordsCombined = wordsCombined.substring(0,wordsCombined.length-1);
    console.log('width = ' + width);
    console.log("words combined = " +wordsCombined);    
    const line = [...wordsCombined];

    console.log("line length = " + line.length);
    while(line.length != width){
        for(let i = 0; i < line.length; i++){
            if(i == line.length-1) continue;
            if(line[i] == ' '){
                process.stdout.write('-');
                if(lastWasSpace == true) continue;
                lastWasSpace = true;
                if(line.length < width){
                    line.splice(i,0,' ');
                    //console.log('added');
                }                
            }
            else{
                process.stdout.write(line[i]);
                lastWasSpace = false;
            }            
            if(line.length == width) break;            
        }   
        process.stdout.write(' length = ' + line.length);
        console.log();     
    }
    line.push('\n');
    console.log('\n==========================================');
    console.log(JSON.stringify(line.join('')));
    console.log('===========================================');
    return line.join('');
}