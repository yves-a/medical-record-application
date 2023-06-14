import diagnoseService from '../services/diagnoseService'
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

describe('Diagnoses Service', () => {
  test('getDiagnoses returns the diagnoses array', () => {
    const diagnoses = diagnoseService.getDiagnoses()

    expect(diagnoses).toBeDefined()
    expect(Array.isArray(diagnoses)).toBe(true)
    expect(diagnoses.length).toBeGreaterThan(0)
  })

  test('addDiary does not throw an error', () => {
    expect(() => {
      diagnoseService.addDiary()
    }).not.toThrow()
  })
})
