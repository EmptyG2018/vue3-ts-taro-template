import type { Ref, InjectionKey } from 'vue';
import type { RadioValue } from './SpecRadio';

export const CheckedInject = Symbol() as InjectionKey<Ref<RadioValue>>;

export const OnChangeInject = Symbol() as InjectionKey<
  (value: RadioValue) => void
>;
