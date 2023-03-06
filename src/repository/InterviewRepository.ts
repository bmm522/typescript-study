export interface InterviewRepository {
    getAll(); Promise<Interview[]>;
}