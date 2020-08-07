import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllInMonthFRomProviderDTO from '../dtos/IFindAllInMonthFRomProviderDTO';
import IFindAllInDayFRomProviderDTO from '../dtos/IFindAllInDayFRomProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFRomProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: IFindAllInDayFRomProviderDTO,
  ): Promise<Appointment[]>;
}
