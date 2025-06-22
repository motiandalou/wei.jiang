import { useTranslation } from "react-i18next";

const useTranslationWithAlias = () => {
  const { t } = useTranslation();
  // 自定义--将 t 重命名为 $t
  return { $t: t };
};

export default useTranslationWithAlias;
