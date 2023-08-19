export interface PatientInfo {
  patient_name: string;
  patient_birth: string;
  patient_age: number;
  patient_height: number;
  patient_weight: number;
  patient_diseases: string[];
  patient_medicines: string[];
  patient_blood_pressure: [number, number];
  patient_blood_sugar: number;
  patient_bmi: number;
  patient_cholesterol: number;
  patient_surgery_history: string;
  patient_special_note: string;
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomName(): string {
  const names = ["John", "Jane", "Mike", "Alice", "Tom", "Mary", "Bob", "Eve"];
  return names[getRandomInt(0, names.length - 1)];
}

function generateRandomDisease(): string[] {
  const diseases = ["Diabetes", "Hypertension", "Asthma", "Cold", "Flu"];
  const count = 1;
  const patientDiseases = [];
  for (let i = 0; i < count; i++) {
    patientDiseases.push(diseases[getRandomInt(0, diseases.length - 1)]);
  }
  return Array.from(new Set(patientDiseases)); // Ensuring no duplicates
}

function generateRandomMedicine(): string[] {
  const medicines = [
    "Paracetamol",
    "Metformin",
    "Ventolin",
    "Lisinopril",
    "Amlodipine",
  ];
  const count = 1;
  const patientMedicines = [];
  for (let i = 0; i < count; i++) {
    patientMedicines.push(medicines[getRandomInt(0, medicines.length - 1)]);
  }
  return Array.from(new Set(patientMedicines)); // Ensuring no duplicates
}

function generateDummyPatientInfo(): PatientInfo {
  const age = getRandomInt(20, 80);
  const height = getRandomInt(150, 200); // cm
  const weight = getRandomInt(50, 100); // kg

  return {
    patient_name: generateRandomName(),
    patient_birth: `19${getRandomInt(40, 99)}-${getRandomInt(
      1,
      12,
    )}-${getRandomInt(1, 28)}`,
    patient_age: age,
    patient_height: height,
    patient_weight: weight,
    patient_diseases: generateRandomDisease(),
    patient_medicines: generateRandomMedicine(),
    patient_blood_pressure: [getRandomInt(90, 140), getRandomInt(60, 90)],
    patient_blood_sugar: getRandomInt(70, 140),
    patient_bmi: Number((weight / (height / 100) ** 2).toFixed(2)),
    patient_cholesterol: getRandomInt(150, 250),
    patient_surgery_history: `Surgery in ${getRandomInt(2000, 2023)}`,
    patient_special_note: "No special notes.",
  };
}

const dummyPatientsInfo: PatientInfo[] = Array.from({ length: 100 }, () =>
  generateDummyPatientInfo(),
);

export default dummyPatientsInfo;

console.log(dummyPatientsInfo);
