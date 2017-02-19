import {CvExperienceImpl} from "./cvExperienceImpl";
import {CvSocialLinksImpl} from "./cvSocialLinksImpl";
export class Cv {

    private _name: string;
    private _role: string;
    private _currentTitle: string;
    private _experience: CvExperienceImpl[];
    private _social_links : any;


    constructor() {

    }

    fillWithJson(json : any) {
        console.log(json);

        if (json["experience"]) {
            this._experience = new Array<CvExperienceImpl>();

            for (var i = 0 ; i< json["experience"].length; i++) {
                var experience : CvExperienceImpl = new CvExperienceImpl(json["experience"][i]);
                this._experience.push(experience);
            }
        }

        if (json["social_links"]) {
            this._social_links = new Array<CvSocialLinksImpl>();

            for (var i = 0 ; i< json["social_links"].length; i++) {
                var social_links : any = new CvSocialLinksImpl(json["social_links"][i]);
                this._social_links.push(social_links);
            }
        }

        for (var propertyName in this) {
            if (json.hasOwnProperty(propertyName)) {
               this[propertyName] = json[propertyName];
            }
        }

    }

    set currentTitle(currentTitle: string) {
        this._currentTitle = currentTitle;
    }

    get currentTitle() : string {
        return this._currentTitle;
    }

    set name(name : string) {
        this._name = name;
    }

    get name() : string {
        return this._name;
    }

    set experience(experience : CvExperienceImpl[]) {
        this._experience = experience;
    }

    get experience() : CvExperienceImpl[] {
        return this._experience;
    }

    set role(role : string) {
        this._role = role;
    }

    get role () :string {
        return this._role;
    }



}
