import { Company } from '../shared/company'
import { Address } from '../shared/address'

export class User {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string,
    public phone: string,
    public website: string,
    public address: Address,
    public company: Company
  ) {}
}
