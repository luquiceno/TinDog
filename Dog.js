
//create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    // Establecer el estado
    setMatchStatus(bool) {
        this.hasBeenLiked = bool;
        this.hasBeenSwiped = true;
    }

    // Creates the HTML elements for the dog 
    getDogHtml() {
        const { name, avatar, age, bio } = this;
        return `
            <div class="feature-suggestion">
                <img id="messageLike" style="display:none" src="images/badge-like.png">
                <img id="messageNope" style="display:none" src="images/badge-nope.png">
                <div class="dog-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="dog-img" src="${avatar}">
            </div>`
    }

}

export default Dog

