// core modules
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtils');

module.exports = class Home {
    constructor(title, description, location, price, images) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.price = price;
        this.images = images;
    }

    save() {
        const homes = Home.fetchAll();
        this.id = Date.now().toString(); // Assign unique ID
        homes.push(this);
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
        fs.writeFileSync(homeDataPath, JSON.stringify(homes));
    }

    static fetchAll() {
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
        if (fs.existsSync(homeDataPath)) {
            const data = fs.readFileSync(homeDataPath, 'utf8');
            return JSON.parse(data);
        }
        return [];
    }

    static findById(homeId) {
        const homes = Home.fetchAll();
        return homes.find(home => home.id === homeId);
    }

    update() {
        const homes = Home.fetchAll();
        const homeIndex = homes.findIndex(home => home.id === this.id);
        if (homeIndex !== -1) {
            homes[homeIndex] = this;
            const homeDataPath = path.join(rootDir, 'data', 'homes.json');
            fs.writeFileSync(homeDataPath, JSON.stringify(homes));
        }
    }

    static deleteById(homeId) {
        const homes = Home.fetchAll();
        const updatedHomes = homes.filter(home => home.id !== homeId);
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
        fs.writeFileSync(homeDataPath, JSON.stringify(updatedHomes));
    }
}
