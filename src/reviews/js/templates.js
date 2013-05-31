YUI.add('bpp-reviews-templates', function(Y){
// DO NOT EDIT THIS FILE
// this should be automatically generated by using the .*.html files in templates
Y.namespace('bpp.Reviews');
Y.bpp.Reviews.templates = {
    base:Y.template('<div class="srpl-container-header">\n    <h5>Reviews on Yahoo!</h5>\n</div>\n<div class="srpl-container-body">\n    <div class="srpl-reviews-tools clearfix">\n        <ul class="srpl-actions f-left">\n            <li class="first-child active">\n                <button title="Popular" type="button" data-type="popular" class="noborder">Popular</button>\n            </li>\n            <li>\n                <button title="Newest" type="button" data-type="newest" class="noborder">Newest</button>\n            </li>\n            <li class="last-child">\n                <button title="Oldest" type="button" data-type="oldest" class="noborder">Oldest</button>\n            </li>\n        </ul>\n        <div class="f-right">\n            <span>90 Reviews</span>\n        </div>\n    </div>\n    <div class="srpl-reviews-container">\n        <div class="srpl-popular-reviews">\n            <ul>\n                <li class="yui3-g srpl-reviews">\n                    <div class="yui3-u-1-12 srpl-avatar-container">\n                        <a href="http://www.yelp.com/user_details?userid=5A45zX5_0I_DecBx6cXHjg">\n                            <img width="40" height="40" src="http://s3-media3.ak.yelpcdn.com/photo/hLUYWzq90iCy965jYiNpew/ss.jpg" alt="Photo of Sally P." class="photo-img">\n                        </a>\n                    </div>\n                    <div class="yui3-u-11-12">\n                        <div class="srpl-rating-header">\n                            <div class="srp-rating-review f-left">\n                                <a target="_blank" href="#">\n                                    <span class="srpl-rating-static f-left srpl-rating-50">\n                                        5 out of 5 stars\n                                    </span>\n                                </a>\n                            </div>\n                            <span class="srpl-review-name">Annie. T</span>\n                            <span class="srpl-review-daate">06/02/13</span>\n                        </div>\n                        <div class="srpl-rating-body">\n                            <p>\n                                I am finally writing my first Yelp review. What better restaurant to write my first review about than Gary Danko? What I enjoyed about this restaurant was the amount of choice you had. You have the choice of getting a 3, 4, or 5 course meal. And within those courses you can choose anything on the menu. So you can have 5 main courses, 3 appetizers.\n                            </p>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class="srpl-newest-reviews" style="display:none;">\n            <ul>\n                <li class="yui3-g srpl-reviews">\n                    <div class="yui3-u-1-12 srpl-avatar-container">\n                        <a href="http://www.yelp.com/user_details?userid=5A45zX5_0I_DecBx6cXHjg">\n                            <img width="40" height="40" src="http://s3-media3.ak.yelpcdn.com/photo/ZkjqwMLZcEM2qQBIGX0c7Q/ss.jpg" alt="" class="photo-img">\n                        </a>\n                    </div>\n                    <div class="yui3-u-11-12">\n                        <div class="srpl-rating-header">\n                            <div class="srp-rating-review f-left">\n                                <a target="_blank" href="#">\n                                    <span class="srpl-rating-static f-left srpl-rating-40">\n                                        4 out of 5 stars\n                                    </span>\n                                </a>\n                            </div>\n                            <span class="srpl-review-name">Harrison V.</span>\n                            <span class="srpl-review-daate">5/21/2013</span>\n                        </div>\n                        <div class="srpl-rating-body">\n                            <p>\n                                I was absolutely blown away by both the service (I was probably helped by 7 different waiters and my cup of water was almost never empty) and the quality of the food. The atmosphere is not, what you say, modern but everything else about this place makes up for that. I ordered the four course meal, which included:\n                            </p>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class="srpl-oldest-reviews" style="display:none;">\n            <ul>\n                <li class="yui3-g srpl-reviews">\n                    <div class="yui3-u-1-12 srpl-avatar-container">\n                        <a href="http://www.yelp.com/user_details?userid=5A45zX5_0I_DecBx6cXHjg">\n                            <img width="40" height="40" src="http://s3-media1.ak.yelpcdn.com/photo/5k7bM6Py8eqmjJ73S-7s3w/ss.jpg" alt="Photo of Sally P." class="photo-img">\n                        </a>\n                    </div>\n                    <div class="yui3-u-11-12">\n                        <div class="srpl-rating-header">\n                            <div class="srp-rating-review f-left">\n                                <a target="_blank" href="#">\n                                    <span class="srpl-rating-static f-left srpl-rating-50">\n                                        5 out of 5 stars\n                                    </span>\n                                </a>\n                            </div>\n                            <span class="srpl-review-name">Bill H.</span>\n                            <span class="srpl-review-daate">5/18/2013</span>\n                        </div>\n                        <div class="srpl-rating-body">\n                            <p>\n                                Place was still full when we arrived at 9 (and was still seating guests until 10!) but we were immediately seated.  Ambiance is nothing to write home about, but low noise level (easy conversations).\n                            </p>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class="srpl-reviews-viewMore-container srpl-reviews-tools">\n        <button title="Load more reviews" type="button" class="noborder srpl-more-reviews">Load more reviews</button>\n    </div>\n</div>')
};
}, '@VERSION@',{
    // [bug 5892107] no need to require assets     
    requires:['bpp-template']
});