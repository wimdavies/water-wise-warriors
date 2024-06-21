import MapComponent from "./MapComponent";

test('renders with a marker and a pop up', () => {
    const { getByText } = render(<MapComponent />);
    expect(getByText(/OpenStreetMap/)).toBeInTheDocument();
    expect(getByText(/A pretty CSS3 popu/)).toBeInTheDocument();
    
});
