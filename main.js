// Circle 

class circle {
    constructor(rad, col) {
        this.radius = rad;
        this.colour = col;
    }

    getRadius() {
        console.log(`Radius of the Circle ${this.radius}`);
    }

    getAreaOfCircle() {
        var res = Math.PI * this.radius * this.radius
        console.log(`Area of the Circle ${res}`);
    }

    getCircumfrenceofCircle() {
        var res = Math.PI * 2 * this.radius;
        console.log(`Circumfrence of the circle ${res}`);
    }

}

var c1 = new circle(5, "red");

c1.getRadius();
c1.getAreaOfCircle();
c1.getCircumfrenceofCircle();

// Movie

class movie {
    constructor(tit, stu, rtg) {
        this.title = tit;
        this.studio = stu;
        this.rating = rtg || "PG";
    }
    // constructor(tit,stu){
    //     this.title = tit;
    //     this.studio = stu;
    //     this.rating = PG;
    // }
    static getPG(movie_array) {
        return movie_array.filter(element => element.rating == "PG");
    }
}
var movie_1 = new movie("Casino Royale", "Eon Productions", "PG14");
var movie_2 = new movie("King Kong", "MJ Studio", "PG13");
var movie_3 = new movie("Iron Man", "MARVEL", "PG");
var movie_4 = new movie("Iron Man 2", "MAVEL");

var movie_array = [movie_1, movie_2, movie_3, movie_4];


// console.log(movie);
movie_array.forEach(element => {
    if (element.rating == "PG") {

    }
});
var res_PG_movies=[];
var find_PG_Movies = movie.getPG(movie_array);
find_PG_Movies.forEach(element => {
    res_PG_movies.push(element.title);
});
console.log(`PG Movies Names`);
console.log(res_PG_movies);