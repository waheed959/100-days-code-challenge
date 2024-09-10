function hobby(...rest: string[]) {
    for(let i of rest) {
        console.log(`I really like ${i}`);
    }
}

hobby("studying", "playing cricket", "singing");
