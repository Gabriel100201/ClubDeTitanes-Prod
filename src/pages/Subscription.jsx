import { Pricing } from '../components/Subscriptions/Pricing';
import { BannerPromo } from '../components/Subscriptions/BannerPromo';
import { HeroSubscription } from '../components/Subscriptions/HeroSubscription';
import './subscriptions.css';

export const Subscription = () => {

  window.scrollTo(0, 0);

  return (
    <>
      <HeroSubscription />
      <BannerPromo />
      <Pricing />
    </>
  )
}
