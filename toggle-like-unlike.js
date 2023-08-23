let dogImage = document.getElementById("puppyImage");
let likeImage = document.getElementById("likeIcon");
let likeThumb = document.getElementById("likeButton");
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        dogImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeImage.style.color = "#0967d2";
        likeThumb.style.backgroundColor = "#0967d2";
        likeThumb.style.color = "#ffffff";
        isImageLiked = true;

    } else {
        dogImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeImage.style.color = "#cbd2d9";
        likeThumb.style.backgroundColor = "#cbd2d9";
        likeThumb.style.color = "#9aa5b1";
        isImageLiked = false;

    }
}