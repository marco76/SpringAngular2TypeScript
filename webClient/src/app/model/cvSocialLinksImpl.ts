export class CvSocialLinksImpl {
   github:string;

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
