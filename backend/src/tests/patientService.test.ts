import patientService from '../services/patientService'
import {
  PatientEntry,
  NonSensitivePatientEntry,
  NewPatientEntry,
  NewEntry,
  Entry,
  Gender,
  EntryType,
  HealthCheckRating,
} from '../types'
describe('patientService', () => {
  test('getPatients returns an array of patient entries', () => {
    const patients = patientService.getPatients()
    expect(Array.isArray(patients)).toBe(true)
  })

  test('getNonSensitiveEntries returns an array of non-sensitive patient entries', () => {
    const nonSensitiveEntries = patientService.getNonSensitiveEntries()
    expect(Array.isArray(nonSensitiveEntries)).toBe(true)
  })

  test('findById returns the patient entry with the specified ID', () => {
    const id = 'd2773336-f723-11e9-8f0b-362b9e155667'
    const patient = patientService.findById(id)
    expect(patient?.id).toBe(id)
  })

  test('addPatient adds a new patient entry', () => {
    const newPatientEntry: NewPatientEntry = {
      name: 'John Doe',
      ssn: '1234567890',
      dateOfBirth: '1990-01-01',
      gender: Gender.Male,
      occupation: 'Doctor',
      entries: [],
    }

    const addedPatient = patientService.addPatient(newPatientEntry)

    expect(addedPatient).toMatchObject(newPatientEntry)
    expect(addedPatient.id).toBeDefined()
  })

  test('updateEntry updates the patient entry with a new entry', () => {
    const patientId = 'examplePatientId'
    const entry: NewEntry = {
      description: 'Some entry description',
      date: '2023-06-13',
      specialist: 'Dr. Smith',
      type: EntryType.HealthCheck, // Specify the entry type here
      healthCheckRating: HealthCheckRating.LowRisk, // Include healthCheckRating for HealthCheckEntry
    }

    const patient = {
      id: patientId,
      name: 'John Doe',
      ssn: '1234567890',
      dateOfBirth: '1990-01-01',
      gender: Gender.Male,
      occupation: 'Doctor',
      entries: [],
    }

    const updatedPatient = patientService.updateEntry(patient, entry)

    expect(updatedPatient).toBeDefined()
    expect(updatedPatient?.id).toBe(patientId)
    expect(updatedPatient?.entries[0].description).toBe(entry.description)
    expect(updatedPatient?.entries[0].date).toBe(entry.date)
    expect(updatedPatient?.entries[0].specialist).toBe(entry.specialist)
    expect(updatedPatient?.entries[0].type).toBe(entry.type)
  })
})
