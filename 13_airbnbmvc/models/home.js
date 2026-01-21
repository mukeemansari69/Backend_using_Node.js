// core modules
const fs=require('fs');
const path=require('path');
const rootDir=require('../utils/pathUtils');
// Fake database to store registered homes

const registeredHomes = [];

// ✅ EXPORT THE ARRAY
exports.registeredHomes = registeredHomes;

module.exports = class Home {
    constructor(title, description, location, price, images) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.price = price;
        this.images = images;
    }
    save() {
        registeredHomes.push(this);
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
        fs.writeFileSync(homeDataPath, JSON.stringify(registeredHomes), error=>{
            console.log("File writing concluded",error);
        });
    }
    static fetchAll() {
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
        const fileContent = fs.readFileSync(homeDataPath, 'utf-8');
        if (fs.existsSync(homeDataPath)) {
            const data = fs.readFileSync(homeDataPath, 'utf8');
            return JSON.parse(data);
        }
        return [];
    }
}