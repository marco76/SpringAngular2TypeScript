export class CvExperienceImpl {
    title : string;
    employer : string;
    period : string;
    achievements: string;
    technologies: string;
    company : string;
    address : string;
    age: string;
    certifications : string;
    degrees: string;
    email: string;
    in_short: string;
    languages: string;
    name: string;
    nationality: string;
    opensource: string;
    phone_number: string;
    role: string;
    user:string;
    visibility:string;
    worked_with :string;

    constructor (json : any) {
        console.log(json);

        for (var propertyName in this) {
            console.log("evaluating: " + propertyName);
            if (json.hasOwnProperty(propertyName)) {
                this[propertyName] = json[propertyName];
                console.log(" setted " + propertyName)
            }
        }
    }



}
