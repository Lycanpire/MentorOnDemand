export class Payment {
  id : string;
  txnType: string;
  amount: number;
  remarks: string;
  mentorName: string;
  techName: string;
  totalAmountToMentor: number;
  userId: string;
  trainingId: string;
  mentorId:string;
 
}

export class Curr {
	
	trainingId : string;
  startDate: string;
  fes: number;
  mentorId: number;
  progress: number;
  rating: number;
  commission_amount:String;
  commissionPercent:number;
  razorpayPaymentId:String;
  skillId:String;
  startTime:String;
  status:number;
  userId:String;
  techId:String;
}
