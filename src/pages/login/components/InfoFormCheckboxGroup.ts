import type { Ref, InjectionKey } from 'vue';
import type { CheckboxValue } from './InfoFormCheckbox';

export const CheckedsInject = Symbol() as InjectionKey<Ref<CheckboxValue[]>>;

export const OnChangeInject = Symbol() as InjectionKey<
  (value: CheckboxValue) => void
>;
