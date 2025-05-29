// Interface pour MajorCredits
interface MajorCredits {
  credits: number;
  brand: 'Major';
}

// Interface pour MinorCredits
interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// Fonction pour additionner des MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major',
  };
}

// Fonction pour additionner des MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor',
  };
}
