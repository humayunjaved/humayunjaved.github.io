var getSourceFromService = {
    "github": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-github.svg",
    "linkedin": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-linkedin.svg",
    "facebook": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-facebook.svg",
    "cv": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-cv.png",
    "leetcode": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-leetcode.png",
    "youtube": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-youtube.svg",
    "telegram": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-telegram.png",
    "behance": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-behance.svg",
    "devianart": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-devianart.svg",
    "dribble": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-dribble.svg",
    "dropbox": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-dropbox.svg",
    "evernote": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-evernote.svg",
    "google-plus": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-google-plus.svg",
    "instagram": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-instagram.svg",
    "pinterest": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-pinterest.svg",
    "product-hunt": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-product-hunt.svg",
    "skype": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-skype.svg",
    "slack": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-slack.svg",
    "spotify": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-spotify.svg",
    "twitter": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-twitter.svg",
    "vimeo": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-vimeo.svg",
    "wordpress": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-wordpress.svg",
};
var SingleSocial = /** @class */ (function () {
    function SingleSocial(social) {
        this.social = social;
    }
    SingleSocial.prototype.generate = function () {
        var a = document.createElement("a");
        a.href = this.social.link;
        a.appendChild(this.generateSocialCell());
        return a;
    };
    SingleSocial.prototype.generateSocialCell = function () {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var span = document.createElement("span");
        div.classList.add("social-cell", "slide-left");
        img.src = getSourceFromService[this.social.service];
        span.innerText = this.social.title;
        div.appendChild(img);
        div.appendChild(span);
        return div;
    };
    return SingleSocial;
}());
var Nav = /** @class */ (function () {
    function Nav() {
        this.cells = [];
    }
    Nav.prototype.addSocial = function (social) {
        this.cells.push(social);
    };
    Nav.prototype.generate = function () {
        var nav = document.createElement("nav");
        nav.classList.add("social-grid");
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var singleCell = _a[_i];
            var newCell = new SingleSocial(singleCell);
            nav.appendChild(newCell.generate());
        }
        return nav;
    };
    return Nav;
}());
var handler = new XMLHttpReqHandler("socials", makeJobs);
function makeJobs(str) {
    var socials = JSON.parse(str);
    var body = document.getElementsByTagName("body");
    var newNav = new Nav();
    socials.forEach(function (val) {
        newNav.addSocial(val);
    });
    for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
        var single = body_1[_i];
        single.appendChild(newNav.generate());
    }
    slideDOM();
}


function slideDOM() {
    var topSliders = document.getElementsByClassName("slide-top");
    var baseTimeout = 100;
    var timeout = 0;
    var _loop_1 = function (slider) {
        setTimeout(function () {
            if (!slider.classList.contains("slide-top-animated")) {
                slider.classList.add("slide-top-animated");
            }
        }, timeout);
        var _loop_4 = function (innerSlider) {
            setTimeout(function () {
                if (!innerSlider.classList.contains("slide-bottom-animated")) {
                    innerSlider.classList.add("slide-bottom-animated");
                }
            }, timeout);
        };
        for (var _i = 0, _a = slider.children; _i < _a.length; _i++) {
            var innerSlider = _a[_i];
            _loop_4(innerSlider);
        }
        timeout += baseTimeout;
    };
    for (var _i = 0, topSliders_1 = topSliders; _i < topSliders_1.length; _i++) {
        var slider = topSliders_1[_i];
        _loop_1(slider);
    }
    var menu = document.getElementsByClassName("index-menu");
    for (var _a = 0, menu_1 = menu; _a < menu_1.length; _a++) {
        var single = menu_1[_a];
        var _loop_2 = function (child) {
            child.addEventListener("mouseout", function (event) {
                if (!child.classList.contains("swing-out")) {
                    child.classList.add("swing-out");
                }
            });
        };
        for (var _b = 0, _c = single.children; _b < _c.length; _b++) {
            var child = _c[_b];
            _loop_2(child);
        }
    }
    var leftSliders = document.getElementsByClassName("slide-left");
    timeout = 0;
    var _loop_3 = function (slider) {
        setTimeout(function () {
            if (!slider.classList.contains("slide-left-animated")) {
                slider.classList.add("slide-left-animated");
            }
        }, timeout);
        timeout += baseTimeout;
    };
    for (var _d = 0, leftSliders_1 = leftSliders; _d < leftSliders_1.length; _d++) {
        var slider = leftSliders_1[_d];
        _loop_3(slider);
    }
}
slideDOM();


var Project = /** @class */ (function () {
    function Project(desc) {
        this.desc = desc;
    }
    Project.prototype.generate = function () {
        var project = document.createElement("div");
        var innerDiv = document.createElement("div");
        project.classList.add("single-project");
        innerDiv.classList.add("project");
        innerDiv.appendChild(this.generateImg());
        innerDiv.appendChild(this.generateDesc());
        project.appendChild(innerDiv);
        return project;
    };
    Project.prototype.generateImg = function () {
        var img = document.createElement("div");
        img.classList.add("img-container");
        img.style.backgroundImage = "url(\"" + this.desc.imgUrl + "\")";
        return img;
    };
    Project.prototype.generateDesc = function () {
        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        var h4 = document.createElement("h4");
        var p = document.createElement("p");
        div.classList.add("text");
        h3.innerHTML = this.desc.title;
        h4.innerHTML = this.desc.date;
        p.innerHTML = this.desc.description;
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(p);
        return div;
    };
    return Project;
}());
var Projects = /** @class */ (function () {
    function Projects() {
        this.projects = [];
    }
    Projects.prototype.add = function (project) {
        this.projects.push(project);
    };
    Projects.prototype.generate = function () {
        var div = document.createElement("div");
        this.projects.forEach(function (value) {
            div.appendChild(value.generate());
        });
        return div;
    };
    return Projects;
}());
var handler = new XMLHttpReqHandler("projects", makeProjects);
function makeProjects(str) {
    var projects = JSON.parse(str);
    var dom = document.getElementById("projects-timeline");
    var aux = new Projects();
    projects.forEach(function (value) {
        aux.add(new Project(value));
    });
    dom.appendChild(aux.generate());
    slideDOM();
}


function navigateTo(str) {
    window.location.href = str + '.html';
}


var XMLHttpReqHandler = /** @class */ (function () {
    function XMLHttpReqHandler(file, func) {
        var _this = this;
        this.req = new XMLHttpRequest();
        this.req.onload = function () { return func(_this.req.responseText); };
        this.req.open("GET", "assets/jsons/" + file + ".json");
        this.req.send();
    }
    return XMLHttpReqHandler;
}());


var Job = /** @class */ (function () {
    function Job(desc) {
        this.desc = desc;
    }
    Job.prototype.generate = function () {
        var outerDiv = document.createElement("div");
        var innerDiv = document.createElement("div");
        outerDiv.classList.add("single-job");
        innerDiv.appendChild(this.createTitle());
        innerDiv.appendChild(this.createTimeframe());
        innerDiv.appendChild(this.createParagraph());
        outerDiv.appendChild(innerDiv);
        return outerDiv;
    };
    Job.prototype.createTitle = function () {
        return Job.createCustom("h3", this.desc.title);
    };
    Job.prototype.createTimeframe = function () {
        return Job.createCustom("h4", this.desc.timeframe + "<br>" + this.desc.place);
    };
    Job.prototype.createParagraph = function () {
        return Job.createCustom("p", this.desc.description);
    };
    Job.createCustom = function (tag, inner) {
        var item = document.createElement(tag);
        item.innerHTML = inner;
        return item;
    };
    return Job;
}());
var Jobs = /** @class */ (function () {
    function Jobs() {
        this.jobs = [];
    }
    Jobs.prototype.add = function (job) {
        this.jobs.push(job);
    };
    Jobs.prototype.generate = function () {
        var div = document.createElement("div");
        div.classList.add("timeline");
        for (var _i = 0, _a = this.jobs; _i < _a.length; _i++) {
            var job = _a[_i];
            div.appendChild(job.generate());
        }
        return div;
    };
    return Jobs;
}());
var handler = new XMLHttpReqHandler("jobs", makeJobs);
function makeJobs(str) {
    var jobs = JSON.parse(str);
    var timeline = document.getElementById("job-timeline");
    var auxTimeline = new Jobs();
    for (var _i = 0, jobs_1 = jobs; _i < jobs_1.length; _i++) {
        var job = jobs_1[_i];
        auxTimeline.add(new Job(job));
    }
    timeline.appendChild(auxTimeline.generate());
    slideDOM();
}


var PersonalDataUpdater = /** @class */ (function () {
    function PersonalDataUpdater(data) {
        this.data = data;
    }
    PersonalDataUpdater.prototype.update = function () {
        this.updateName();
        this.updateMail();
        this.updateTel();
        this.updateAboutMe();
        this.updatePageTitle();
    };
    PersonalDataUpdater.prototype.updateName = function () {
        PersonalDataUpdater.getAndUpdate("name", this.data.name);
    };
    PersonalDataUpdater.prototype.updateMail = function () {
        PersonalDataUpdater.getAndUpdate("email", this.data.email);
    };
    PersonalDataUpdater.prototype.updateTel = function () {
        PersonalDataUpdater.getAndUpdate("tel", this.data.telVisible);
        var contacts = document.getElementsByClassName("real-tel");
        for (var _i = 0, contacts_1 = contacts; _i < contacts_1.length; _i++) {
            var contact = contacts_1[_i];
            contact.href = "tel:" + this.data.telVisible
                .replace(new RegExp(' ', 'g'), "")
                .replace("+", "")
                .replace("-", "");
        }
    };
    PersonalDataUpdater.prototype.updateAboutMe = function () {
        PersonalDataUpdater.getAndUpdate("about-me", this.data.aboutMe);
    };
    PersonalDataUpdater.prototype.updatePageTitle = function () {
        if (this.data.pageTitle) {
            document.title = this.data.pageTitle;
        }
    };
    PersonalDataUpdater.getAndUpdate = function (what, to) {
        var all = document.getElementsByClassName(what);
        for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
            var single = all_1[_i];
            single.innerHTML = to;
        }
    };
    return PersonalDataUpdater;
}());
var handler = new XMLHttpReqHandler("about", makeProjects);
function makeProjects(str) {
    var personalData = JSON.parse(str);
    var aux = new PersonalDataUpdater(personalData);
    aux.update();
    slideDOM();
}


var MenuItem = /** @class */ (function () {
    function MenuItem(fileLink, label) {
        this.fileLink = fileLink;
        this.label = label;
    }
    MenuItem.prototype.generate = function () {
        var _this = this;
        var div = document.createElement("div");
        div.innerText = this.label;
        div.addEventListener("click", function () {
            navigateTo(_this.fileLink);
        });
        return div;
    };
    return MenuItem;
}());
var Menu = /** @class */ (function () {
    function Menu() {
        this.items = [];
    }
    Menu.prototype.addItem = function (fileLink, label) {
        this.items.push(new MenuItem(fileLink, label));
    };
    Menu.prototype.copyItem = function (item) {
        this.items.push(item);
    };
    Menu.prototype.generate = function () {
        var nav = document.createElement("nav");
        nav.classList.add("index-menu", "center-text", "slide-bottom-children");
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            nav.appendChild(item.generate());
        }
        return nav;
    };
    return Menu;
}());
var bodys = document.getElementsByClassName("main-body");
var menu = new Menu();
var singleBody;
menu.addItem("about", "About me");
menu.addItem("experience", "Experience");
menu.addItem("projects", "projects");
for (var _i = 0, bodys_1 = bodys; _i < bodys_1.length; _i++) {
    var body = bodys_1[_i];
    body.prepend(menu.generate());
    singleBody = body;
}
function parseScroll() {
    var navbars = document.getElementsByClassName("index-menu");
    var padding = document.getElementById("add-padding");
    for (var _i = 0, navbars_1 = navbars; _i < navbars_1.length; _i++) {
        var navbar = navbars_1[_i];
        var offset = navbar.scrollHeight;
        var navcpy = navbar;
        if (window.pageYOffset > offset) {
            navcpy.classList.add("sticky-menu");
            navcpy.style.width = (5 + singleBody.clientWidth).toString() + "px";
            padding.style.paddingTop = "150px";
        }
        else {
            navcpy.classList.remove("sticky-menu");
            navcpy.style.width = "100%";
            padding.style.paddingTop = "0";
        }
    }
}
window.onscroll = function () {
    parseScroll();
};
