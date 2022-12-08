type Records = Record<string, any>;

type PageOption = {
  immediate?: boolean;
  pullDownRefresh?: boolean;
  onBefore?: (params?: Records) => void;
  onSuccess?: () => void;
  onError?: (error: any) => void;
  onFinally?: (params: Records | undefined, result: any, err: any) => void;
};

const usePage = <T = any>(
  service: (params?: Records) => Promise<T>,
  option: PageOption = {}
) => {
  const {
    immediate,
    pullDownRefresh,
    onBefore,
    onSuccess,
    onError,
    onFinally,
  } = option;

  const run = async (runOption?: { pullDownRefresh?: boolean }) => {
    // const { pullDownRefresh } = runOption;
    // console.log()
  };
};

export default usePage;
