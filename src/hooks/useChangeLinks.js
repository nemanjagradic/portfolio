import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { linkActions } from "../store/links-slice";
import { useMemo } from "react";

const useChangeLinks = (targetEl, options) => {
  const dispatch = useDispatch();

  const intersectionCallback = useCallback(
    (entries) => {
      const [entry] = entries;

      if (
        entry.isIntersecting &&
        entry.intersectionRatio >= options.threshold
      ) {
        const sectionId = entry.target.id;
        dispatch(linkActions.setActive({ sectionId }));
      }
    },
    [dispatch, options.threshold]
  );

  const intersectionOptions = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );

    if (targetEl) sectionObserver.observe(targetEl);

    return () => {
      if (targetEl) sectionObserver.unobserve(targetEl);
    };
  }, [targetEl, intersectionCallback, intersectionOptions]);
};

export default useChangeLinks;
