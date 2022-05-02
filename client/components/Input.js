import React, { useEffect, useRef, useState } from 'react';

const Input = ({ onSubmit }) => {
	const sizeXRef = useRef();
	const sizeYRef = useRef();
	const posXRef = useRef();
	const posYRef = useRef();
	const directionRef = useRef();
	const instructionRef = useRef();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		sizeXRef.current.value = 0;
		sizeYRef.current.value = 0;
		posXRef.current.value = 0;
		posYRef.current.value = 0;
	}, [])

	const addInstruction = (i) => {
		instructionRef.current.value = instructionRef.current.value + i;
	};

	const _onSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		const areaSize = [Number(sizeXRef.current.value), Number(sizeYRef.current.value)];
		const position = {
			x: Number(posXRef.current.value),
			y: Number(posYRef.current.value),
			direction: directionRef.current.value,
		};
		const instructions = instructionRef.current.value;
		const data = { areaSize, position, instructions };
		if (typeof onSubmit === 'function') {
			onSubmit(data)?.then(() => {
				setLoading(false);
			});
		}
	};

	return (
		<form onSubmit={_onSubmit} className="container">
			<div className="row">
				<div className="col-4">
					<h2 style={{ textAlign: 'left' }}>Plateau Size</h2>
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text">Max X</span>
						</div>
						<input
							data-testid="sizeX"
							ref={sizeXRef}
							type="number"
						/>
					</div>
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text">Max Y</span>
						</div>
						<input
							data-testid="sizeY"
							ref={sizeYRef}
							type="number"
						/>
					</div>
				</div>
				<div className="col-4">
					<h2 style={{ textAlign: 'left' }}>Starting Position</h2>
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text">X</span>
						</div>
						<input data-testid="posX" ref={posXRef} type="number" />
					</div>
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text">Y</span>
						</div>
						<input data-testid="posY" ref={posYRef} type="number" />
					</div>
				</div>
				<div className="col-4">
					<h2 style={{ textAlign: 'left' }}>Starting Direction</h2>
					<select data-testid="direction" ref={directionRef}>
						<option value="N">North</option>
						<option value="E">East</option>
						<option value="S">Sout</option>
						<option value="W">West</option>
					</select>
				</div>
			</div>

			<div className="row pt-2">
				<div className="col-8">
					<h2 style={{ textAlign: 'left' }}>Instructions</h2>
					<div className="input-group">
						<input
							data-testid="instructions"
							ref={instructionRef}
							className="input"
						/>
						<div className="input-group-append">
							<button
								data-testid="addM"
								onClick={() => addInstruction('M')}
								class="btn btn-outline-secondary"
								type="button"
							>
								Forward
							</button>
							<button
								data-testid="addL"
								onClick={() => addInstruction('L')}
								class="btn btn-outline-secondary"
								type="button"
							>
								Turn Left
							</button>
							<button
								data-testid="addR"
								onClick={() => addInstruction('R')}
								class="btn btn-outline-secondary"
								type="button"
							>
								Turn Right
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="row pt-3">
				<div className="col" style={{ textAlign: 'left' }}>
					<button
						data-testid="submit"
						disabled={loading}
						className="btn btn-success"
						type="submit"
					>
						Run Rover Mission
					</button>
				</div>
			</div>
		</form>
	);
};

export default Input;
