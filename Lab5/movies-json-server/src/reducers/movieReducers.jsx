// ✅ movieReducers.jsx
export const initialMovieState = {
  movies: [],
  filteredMovies: [], // danh sách phim đã được lọc
  genres: [],
  loading: false,
  isEditing: null,
  currentMovie: { avatar: '', title: '', description: '', genreId: '', duration: '', year: '', country: '' },
  showEditModal: false,
  showDeleteModal: false,
  movieToDelete: null,
};

export const movieReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.payload, filteredMovies: action.payload, loading: false };

    case 'SET_GENRES':
      return { ...state, genres: action.payload };

    case 'START_LOADING':
      return { ...state, loading: true };

    case 'UPDATE_FIELD':
      return {
        ...state,
        currentMovie: { ...state.currentMovie, [action.payload.name]: action.payload.value },
      };

    case 'OPEN_EDIT_MODAL':
      return {
        ...state,
        currentMovie: action.payload,
        isEditing: action.payload.id,
        showEditModal: true,
      };

    case 'CLOSE_EDIT_MODAL':
      return {
        ...state,
        currentMovie: initialMovieState.currentMovie,
        isEditing: null,
        showEditModal: false,
      };

    case 'OPEN_DELETE_MODAL':
      return {
        ...state,
        movieToDelete: action.payload,
        showDeleteModal: true,
      };

    case 'CLOSE_DELETE_MODAL':
      return {
        ...state,
        movieToDelete: null,
        showDeleteModal: false,
      };

    case 'RESET_FORM':
      return {
        ...state,
        currentMovie: initialMovieState.currentMovie,
        isEditing: null,
        showEditModal: false,
      };

    // 🧩 Lọc / tìm kiếm / sắp xếp phim
    case 'FILTER_MOVIES': {
      const { search, genreId, duration, sort } = action.payload;
      let filtered = [...state.movies];

      // Tìm kiếm theo tên phim
      if (search) {
        filtered = filtered.filter(movie =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Lọc theo thể loại
      if (genreId) {
        filtered = filtered.filter(movie => movie.genreId === Number(genreId));
      }

      // Lọc theo thời lượng
      if (duration === 'short') filtered = filtered.filter(m => m.duration < 100);
      else if (duration === 'medium') filtered = filtered.filter(m => m.duration >= 100 && m.duration <= 120);
      else if (duration === 'long') filtered = filtered.filter(m => m.duration > 120);

      // Sắp xếp theo tên phim
      if (sort === 'asc') filtered.sort((a, b) => a.title.localeCompare(b.title));
      if (sort === 'desc') filtered.sort((a, b) => b.title.localeCompare(a.title));

      return { ...state, filteredMovies: filtered };
    }

    // Reset filter (hiển thị lại toàn bộ)
    case 'RESET_FILTER':
      return { ...state, filteredMovies: state.movies };

    default:
      return state;
  }
};
