import { Pricing } from '../components/Subscriptions/Pricing';
import { BannerPromo } from '../components/Subscriptions/BannerPromo';
import { HeroSubscription } from '../components/Subscriptions/HeroSubscription';
import './subscriptions.css';

export const Subscription = () => {


  return (
    <>
      <HeroSubscription />
      <BannerPromo />
      <Pricing />
    </>
  )
}
