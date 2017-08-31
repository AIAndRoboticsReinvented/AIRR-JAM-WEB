import { Injectable } from '@angular/core';

@Injectable()
export class StateMachineService {

    private visitorId: {};
    private companyId: {};

    constructor() { }

    public getVisitorID(): Promise<any> {
        return Promise.resolve(this.visitorId);
    };

    public setVisitorID(newVisitorId): void {
        this.visitorId = newVisitorId;
    }


    public getCompanyID(): Promise<any> {
        return Promise.resolve(this.companyId);
    };

    public setCompanyID(newCompanyId): void {
        this.companyId = newCompanyId;
    }


}
