const fs = require('fs');

const readContract = token => {
    const buffer = fs.readFile(contract, err, buffer => {
        if(err) return err;
        return buffer.toString();
    }) 
}


const replace = (token, society)=>{
    const newToken = readContract(contract)
    .replace(/YOUR_MOUNT/g, society.votes_founds)
    .replace(/YOUR_NAME/g, society.name)
    .replace(/YOUR_DECIMALS/g, society.token)
    .replace(/YOUR CODE_GOES_HERE/, society.function);
    
    return newToken;
}

const buildToken = (route, token) => {
    const builded = fs.writeFileSync(`${route}`,  token, err => {
        if(err) return false;
        return true;
    })
    return builded;
}

module.exports = {
    readContract,
    replace,
    buildToken
}