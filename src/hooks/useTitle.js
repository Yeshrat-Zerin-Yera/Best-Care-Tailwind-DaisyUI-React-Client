import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `Best Care ${title}`;
    }, [title]);
};

export default useTitle;