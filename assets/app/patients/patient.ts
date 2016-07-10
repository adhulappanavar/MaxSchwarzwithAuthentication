export class Patient {

    patientName : string;
    patientId : string;
    patientCode : string;
    admissionDate : string;
    description : string;
    imageUrl : string;

   constructor (patienttName: string, 
                patientId?: string, 
                patientCode?: string, 
                admissionDate?: string, 
                description?: string,
                imageUrl? : string) {
        this.patientId = patientId;
        this.patientName = patienttName;
        this.patientCode = patientCode;
        this.admissionDate = admissionDate;
        this.description = description;
        this.imageUrl = imageUrl;
    }

}