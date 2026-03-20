
import FeatureNewBox from '../../../Component/Utils/FeatureNewBox';

function Feature() {
  return (
  <>
  <section className="px-9 pt-10 pb-20">
    <div className="flex max-w-screen-lg flex-wrap mx-auto justify-between items-center ">
  <FeatureNewBox title={'Khata builds customer trust and transparency.'} img={'Khataimg1.webp'} alt={'Data Tracking'} head={"Data Tracking"} para={"Track all credits and debits in real time using your digital accounting.  Stay in full control of your business with live updates and accurate financial insights right at your fingertips."}/>
  <FeatureNewBox img={'Khataimg2.webp'} alt={'Send Reminder'} head={"Send Reminder"} para={"Never miss a due date again. Automatically send payment reminders to your customers via WhatsApp directly from your khata, ensuring timely payments without any extra effort."}/>
  <FeatureNewBox img={'Khataimg3.webp'} alt={'Edit customer details'} head={"Edit customer details"} para={"Easily add, update, or manage customer information to keep your records accurate and organized. Access contact details, outstanding balances, and transaction history with just a few clicks."}/>
  <FeatureNewBox img={'Khataimg4.webp'} alt={'View Transaction History'} head={"View Transaction History"} para={"View a complete history of all credit and debit transactions with your online digital khata. Easily check past payments and outstanding dues anytime, anywhere. Your financial records are always just one click away."}/>
  <FeatureNewBox img={'Khataimg5.webp'} alt={'Download and Send report'} head={"Download and Send report"} para={"Create daily, weekly, or monthly reports from your digital bahi khata and share them instantly via WhatsApp. Download and share them easily with your customers to maintain transparency and trust. "}/>
  </div>
  </section>
  </>
  )
}
export default Feature