define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "ł_FGDC__ą",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "ł_None__ą",
    	notComplete: "ł_Not complete_____ą",
    	other: "ł_Other___ą",
    	present: "ł_Present___ą",
    	unknown: "ł_Unknown___ą",
    	unpublishedMaterial: "ł_Unpublished material_______ą"
    },
    
    hints: {
    	integerGreaterThanOne: "ł_(enter an integer > 1)________ą",
    	integer0To100: "ł_(enter an integer 0..100)_________ą"
    },
    
    citeinfo: {
    	caption: "ł_Citation Information_______ą",
    	origin: "ł_Originator____ą",
    	pubdate: "ł_Publication Date______ą",
    	pubtime: "ł_Publication Time______ą",
    	title: "ł_Title___ą",
    	edition: "ł_Edition___ą",
    	geoform: {
    		caption: "ł_Geospatial Data Presentation Form___________ą",
    		atlas: "ł_Atlas___ą",
    		audio: "ł_Audio___ą",
    		diagram: "ł_Diagram___ą",
    		sDocument: "ł_Document___ą",
    		globe: "ł_Globe___ą",
    		map: "ł_Map__ą",
    		model: "ł_Model___ą",
    		multiMediaPresentation: "ł_Multimedia presentation________ą",
    		profile: "ł_Profile___ą",
    		rasterDigitalData: "ł_Raster digital data_______ą",
    		remoteSensingImage: "ł_Remote-sensing image_______ą",
    		section: "ł_Section___ą",
    		spreadsheet: "ł_Spreadsheet____ą",
    		tabularDigitalData: "ł_Tabular digital data_______ą",
    		vectorDigitalData: "ł_Vector digital data_______ą",
    		video: "ł_Video___ą",
    		view: "ł_View__ą"
    	},
    	serinfo: {
    		caption: "ł_Series Information______ą",
    		sername: "ł_Series Name____ą",
    		issue: "ł_Issue Identification_______ą"
    	},
    	pubinfo: {
    		caption: "ł_Publication Information________ą",
    		pubplace: "ł_Publication Place______ą",
    		publish: "ł_Publisher____ą"
    	},
    	othercit: "ł_Other Citation Details________ą",
    	onlink: "ł_Online Linkage (URL)_______ą"
    },
    
    cntinfo: {
    	caption: "ł_Contact Information_______ą",
    	section: {
    		primary: "ł_Primary___ą",
    		phoneAndEmail: "ł_Phone and E-Mail______ą",
    		hoursAndInstructions: "ł_Hours and Instructions________ą"
    	},
    	cntorgp: {
    		caption: "ł_By organization______ą",
    		cntorg: "ł_Organization_____ą",
    		cntper: "ł_Person___ą"
    	},
    	cntperp: {
    		caption: "ł_By person____ą",
    		cntper: "ł_Person___ą",
    		cntorg: "ł_Organization_____ą"
    	},
    	cntpos: "ł_Position___ą",
    	cntaddr: {
    		caption: "ł_Address___ą",
    		addrtype: {
    			caption: "ł_Address Type_____ą",
    			mailing: "ł_Mailing___ą",
    			physical: "ł_Physical___ą",
    			mailingAndPhysical: "ł_Mailing and Physical_______ą"
    		},
    		address: "ł_Address___ą",
    		city: "ł_City__ą",
    		state: "ł_State___ą",
    		postal: "ł_Postal Code____ą",
    		country: "ł_Country___ą"
    	},
    	cntvoice: "ł_Voice___ą",
    	cnttdd: "ł_TDD/TTY Telephone (hearing impaired)____________ą",
    	cntfax: "ł_Fax__ą",
    	cntemail: "ł_E-Mail Address_____ą",
    	hours: "ł_Hours___ą",
    	cntinst: "ł_Instructions_____ą"
    },
    
    dataqual: {
    	caption: "ł_Data Quality Information________ą",
    	section: {
    		attributeAccuracy: "ł_Attribute Accuracy______ą",
    		logicalConsistency: "ł_Logical Consistency_______ą",
    		completeness: "ł_Completeness_____ą",
    		positionalAccuracy: "ł_Positional Accuracy_______ą",
    		lineage: "ł_Lineage___ą",
    		cloudCover: "ł_Cloud Cover____ą"
    	},
    	attracc: {
    		caption: "ł_Attribute Accuracy______ą",
    		attraccr: "ł_Attribute Accuracy Report_________ą",
    		qattracc: {
    			caption: "ł_Quantitative Attribute Accuracy Assessment______________ą",
    			attraccv: "ł_Attribute Accuracy Value________ą",
    			attracce: "ł_Attribute Accuracy Explanation__________ą"
    		}
    	},
    	logic: "ł_Logical Consistency Report_________ą",
    	complete: "ł_Completeness Report_______ą",
    	posacc: "ł_Positional Accuracy_______ą",
    	horizpa: {
    		caption: "ł_Horizontal Positional Accuracy__________ą",
    		horizpar: "ł_Horizontal Positional Accuracy Report____________ą",
    		qhorizpa: {
    			caption: "ł_Quantitative Horizontal Positional Accuracy Assessment_________________ą",
    			horizpav: "ł_Horizontal Positional Accuracy Value____________ą",
    			horizpae: "ł_Horizontal Positional Accuracy Explanation______________ą"
    		}
    	},
    	vertacc: {
    		caption: "ł_Vertical Positional Accuracy_________ą",
    		vertaccr: "ł_Vertical Positional Accuracy Report____________ą",
    		qvertpa: {
    			caption: "ł_Quantitative Vertical Positional Accuracy Assessment_________________ą",
    			vertaccv: "ł_Vertical Positional Accuracy Value___________ą",
    			vertacce: "ł_Vertical Positional Accuracy Explanation_____________ą"
    		}
    	},
    	lineage: {
    		caption: "ł_Lineage___ą"
    	},
    	srcinfo: {
    		caption: "ł_Source Information______ą",
    		srccite: "ł_Source Citation______ą",
    		srcscale: "ł_Source Scale Denominator________ą",
    		typesrc: {
    			caption: "ł_Type of Source Media_______ą",
    			paper: "ł_Paper___ą",
    			stableBaseMaterial: "ł_Stable-base material_______ą",
    			microfiche: "ł_Microfiche____ą",
    			microfilm: "ł_Microfilm____ą",
    			audiocassette: "ł_Audio cassette_____ą",
    			chart: "ł_Chart___ą",
    			filmstrip: "ł_Film strip____ą",
    			transparency: "ł_Transparency_____ą",
    			videocassette: "ł_Video cassette_____ą",
    			videodisc: "ł_Video disc____ą",
    			videotape: "ł_Video tape____ą",
    			physicalModel: "ł_Physical model_____ą",
    			computerProgram: "ł_Computer program______ą",
    			disc: "ł_Disc__ą",
    			cartridgeTape: "ł_Cartridge tape_____ą",
    			magneticTape: "ł_Magnetic tape_____ą",
    			online: "ł_Online___ą",
    			cdrom: "ł_CD-ROM___ą",
    			electronicBulletinBoard: "ł_Electronic bulletin board_________ą",
    			electronicMailSystem: "ł_Electronic mail system________ą"
    		},
    		srctime: "ł_Source Time Period of Content__________ą",
    		srccurr: "ł_Source Currentness Reference_________ą",
    		srccitea: "ł_Source Citation Abbreviation_________ą",
    		srccontr: "ł_Source Contribution_______ą"
    	},
    	procstep: {
    		caption: "ł_Process Step_____ą",
    		procdesc: "ł_Process Description_______ą",
    		srcused: "ł_Source Used Citation Abbreviation___________ą",
    		procdate: "ł_Process Date_____ą",
    		proctime: "ł_Process Time_____ą",
    		srcprod: "ł_Source Produced Citation Abbreviation____________ą",
    		proccont: "ł_Process Contact______ą"
    	},
    	cloud: "ł_Cloud Cover____ą"
    },
    
    distinfo: {
    	caption: "ł_Distribution Information________ą",
    	section: {
    		distributor: "ł_Distributor____ą",
    		description: "ł_Description____ą",
    		orderProcess: "ł_Order Process_____ą",
    		prerequisites: "ł_Prerequisites_____ą",
    		availability: "ł_Availability_____ą"
    	},
    	distrib: "ł_Distributor____ą",
    	resdesc: {
    		caption: "ł_Resource Description_______ą",
    		liveData: "ł_Live Data and Maps______ą",
    		downloadableData: "ł_Downloadable Data______ą",
    		offlineData: "ł_Offline Data_____ą",
    		staticMapImages: "ł_Static Map Images______ą",
    		sDocument: "ł_Other Documents______ą",
    		application: "ł_Applications_____ą",
    		geographicService: "ł_Geographic Services_______ą",
    		clearingHouse: "ł_Clearinghouses_____ą",
    		mapFiles: "ł_Map Files____ą",
    		geographicActivies: "ł_Geographic Activities_______ą"
    	},
    	distliab: "ł_Distribution Liability Statement___________ą",
    	custom: "ł_Custom Order Process_______ą",
    	techpreq: "ł_Technical Prerequisites________ą",
    	availabl: "ł_Availability_____ą"
    },
    
    eainfo: {
    	caption: "ł_Entity and Attribute Information___________ą",
    	overview: "ł_Overview Description_______ą",
    	eaover: "ł_Entity and Attribute Overview__________ą",
    	eadetcit: "ł_Entity and Attribute Detail Citation____________ą"
    },
    
    idinfo: {
    	caption: "ł_Identification Information_________ą",
    	section: {
    		timeAndStatus: "ł_Time and Status______ą",
    		constraints: "ł_Constraints____ą",
    		contact: "ł_Contact___ą",
    		additional: "ł_Additional____ą"
    	},
    	citeinfo: "ł_Citation___ą",
    	descript: {
    		caption: "ł_Description____ą",
    		sAbstract: "ł_Abstract___ą",
    		purpose: "ł_Purpose___ą",
    		supplinf: "ł_Supplemental Information________ą"
    	},
    	timeperd: {
    		caption: "ł_Time Period of Content________ą",
    		current: {
    			caption: "ł_Currentness Reference_______ą",
    			groundCondition: "ł_Ground Condition______ą",
    			publicationDate: "ł_Publication Date______ą"
    		}
    	},
    	status: {
    		caption: "ł_Status___ą",
    		progress: {
    			caption: "ł_Progress___ą",
     			complete: "ł_Complete___ą",
    			inWork: "ł_In work___ą",
    			planned: "ł_Planned___ą"
    		},
    		update: {
    			caption: "ł_Maintenance and Update Frequency___________ą",
    			continual: "ł_Continual____ą",
    			daily: "ł_Daily___ą",
    			weekly: "ł_Weekly___ą",
    			monthly: "ł_Monthly___ą",
    			annually: "ł_Annually___ą",
    			unknown: "ł_Unknown___ą",
    			asNeeded: "ł_As needed____ą",
    			irregular: "ł_Irregular____ą",
    			nonePlanned: "ł_None planned_____ą"
    		}
    	},
    	spdom: {
    		caption: "ł_Extent___ą",
    		bounding: {
    			caption: "ł_Bounding Coordinates_______ą",
    			westbc: "ł_West Bounding Longitude________ą",
    			eastbc: "ł_East Bounding Longitude________ą",
    			northbc: "ł_North Bounding Latitude________ą",
    			southbc: "ł_South Bounding Latitude________ą"
    		}
    	},
      keywords: {
        caption: "Słowa kluczowe",
        theme: "Motyw",
        place: "Miejsce",
        stratum: "Warstwa",
        temporal: "Tymczasowa",
        thesaursus: "Powiązany słownik",
        delimited: "Słowa kluczowe",
        themektIsoTopicCategory: "Temat ISO...",
        themektIsoTopicDialog: "Temat ISO",
        placektGnis: "System informacyjny nazw geograficznych"
      },
      accconst: "Ograniczenia dostępu",
      useconst: "Używaj ograniczeń",
      ptcontac: "Punkt kontaktowy dla zasobu",
      browse: {
      	caption: "ł_Browse Graphic_____ą",
      	browsen: "ł_Browse Graphic URL______ą",
      	browsed: "ł_Browse Graphic File Description__________ą",
      	browset: "ł_Browse Graphic File Type________ą"
      },
      datacred: "Kredyt zbioru danych",
      secinfo: {
      	caption: "ł_Security Information_______ą",
      	secsys: "ł_Security Classification System__________ą",
      	secclass: {
      		caption: "ł_Security Classification________ą",
      		topSecret: "ł_Top secret____ą",
      		secret: "ł_Secret___ą",
      		confidential: "ł_Confidential_____ą",
      		restricted: "ł_Restricted____ą",
      		unclassified: "ł_Unclassified_____ą",
      		sensitive: "ł_Sensitive____ą"
      	},
      	sechandl: "ł_Security Handling Description__________ą"
      },
      sNative: "Środowisko natywnego zbioru danych",
      crossref: "Odniesienie krzyżowe"
    },
    
    metadata: {
    	idinfo: "ł_Identification_____ą",
    	dataqual: "ł_Quality___ą",
    	spdoinfo: "ł_Spatial Data Organization_________ą",
    	spref: "ł_Spatial Reference______ą",
    	eainfo: "ł_Entity and Attribute_______ą",
    	distinfo: "ł_Distribution_____ą",
    	metainfo: "ł_Metadata___ą"
    },
    
    metainfo: {
    	caption: "ł_Metadata Information_______ą",
    	section: {
    		dates: "ł_Metadata Dates_____ą",
    		contact: "ł_Metadata Contact______ą",
    		standard: "ł_Metadata Standard______ą",
    		additional: "ł_Additional____ą"
    	},
      metd: "Data metadanych",
      metrd: "Data weryfikacji metadanych",
      metfrd: "Przyszła data weryfikacji metadanych",
      metstdn: "Standardowa nazwa metadanych",
      metstdv: "Standardowa wersja metadanych",
      metac: "Ograniczenia dostępu do metadanych",
      metuc: "Ograniczenia użycia metadanych",
      metsi: {
      	caption: "ł_Metadata Security Information__________ą",
      	metscs: "ł_Metadata Security Classification System_____________ą",
      	metsc: "ł_Metadata Security Classification___________ą",
      	metshd: "ł_Metadata Security Handling Description____________ą"
      }
    },
    
    spref: {
    	caption: "ł_Spatial Reference Information__________ą",
    	horizsys: {
    		caption: "ł_Horizontal Coordinate System_________ą",
    		geograph: {
    			caption: "ł_Geographic____ą",
    			latres: "ł_Latitude Resolution_______ą",
    			longres: "ł_Longitude Resolution_______ą",
    			geogunit: {
    				caption: "ł_Geographic Coordinate Units_________ą",
    				decimalDegrees: "ł_Decimal degrees______ą",
    				decimalMinutes: "ł_Decimal minutes______ą",
    				decimalSeconds: "ł_Decimal seconds______ą",
    				degreesAndDecimalMinutes: "ł_Degrees and decimal minutes_________ą",
    				degreesMinutesAndDecimalSeconds: "ł_Degrees, minutes, and decimal seconds____________ą",
    				radians: "ł_Radians___ą",
    				grads: "ł_Grads___ą"
    			}
    		},
    		planar: {
    			caption: "ł_Planar___ą"
    		},
    		local: {
    			caption: "ł_Local___ą",
    			localdes: "ł_Local Description______ą",
    			localgeo: "ł_Local Georeference Information__________ą"
    		},
    		geodetic: {
    			caption: "ł_Geodetic Model_____ą",
    			horizdn: {
    				caption: "ł_Horizontal Datum Name_______ą",
    				nad83: "ł_North American Datum of 1983_________ą",
    				nad27: "ł_North American Datum of 1927_________ą"
    			},
    			ellips: {
    				caption: "ł_Ellipsoid Name_____ą",
    				grs80: "ł_Geodetic Reference System 80_________ą",
    				clarke1866: "ł_Clarke 1866____ą"
    			},
    			semiaxis: "ł_Semi-major Axis______ą",
    			denflat: "ł_Denominator of Flattening Ratio__________ą"
    		}
    	},
    	vertdef: {
    		caption: "ł_Vertical Coordinate System_________ą",
    		altsys: {
    			caption: "ł_Altitude System______ą",
    			altdatum: {
    				caption: "ł_Altitude Datum Name_______ą",
    				navd88: "ł_North American Vertical Datum of 1988____________ą",
    				ngvd29: "ł_National Geodetic Vertical Datum of 1929_____________ą"
    			},
    			altres: "ł_Altitude Resolution_______ą",
    			altunits: {
    				caption: "ł_Altitude Distance Units________ą",
    				meters: "ł_Meters___ą",
    				feet: "ł_Feet__ą"
    			},
    			altenc: {
    				caption: "ł_Altitude Encoding Method________ą",
    				explicit: "ł_Explicit elevation coordinate included with horizontal coordinates_____________________ą",
    				implicit: "ł_Implicit coordinate_______ą",
    				attribute: "ł_Attribute values______ą"
    			}
    		},
    		depthsys: {
    			caption: "ł_Depth System_____ą",
    			depthdn: {
    				caption: "ł_Depth Datum Name______ą",
    				option1: "ł_Local surface_____ą", 
    				option2: "ł_Chart datum; datum for sounding reduction_____________ą", 
    				option3: "ł_Lowest astronomical tide________ą", 
    				option4: "ł_Highest astronomical tide_________ą", 
    				option5: "ł_Mean low water_____ą", 
    				option6: "ł_Mean high water______ą", 
    				option7: "ł_Mean sea level_____ą", 
    				option8: "ł_Land survey datum______ą", 
    				option9: "ł_Mean low water springs________ą", 
    				option10: "ł_Mean high water springs________ą", 
    				option11: "ł_Mean low water neap_______ą", 
    				option12: "ł_Mean high water neap_______ą", 
    				option13: "ł_Mean lower low water_______ą", 
    				option14: "ł_Mean lower low water springs_________ą", 
    				option15: "ł_Mean higher high water________ą", 
    				option16: "ł_Mean higher low water_______ą", 
    				option17: "ł_Mean lower high water_______ą", 
    				option18: "ł_Spring tide____ą", 
    				option19: "ł_Tropic lower low water________ą", 
    				option20: "ł_Neap tide____ą", 
    				option21: "ł_High water____ą", 
    				option22: "ł_Higher high water______ą", 
    				option23: "ł_Low water____ą", 
    				option24: "ł_Low-water datum______ą", 
    				option25: "ł_Lowest low water______ą", 
    				option26: "ł_Lower low water______ą", 
    				option27: "ł_Lowest normal low water________ą", 
    				option28: "ł_Mean tide level______ą", 
    				option29: "ł_Indian spring low water________ą", 
    				option30: "ł_High-water full and charge_________ą", 
    				option31: "ł_Low-water full and charge_________ą", 
    				option32: "ł_Columbia River datum_______ą", 
    				option33: "ł_Gulf Coast low water datum_________ą", 
    				option34: "ł_Equatorial springs low water_________ą", 
    				option35: "ł_Approximate lowest astronomical tide____________ą", 
    				option36: "ł_No correction_____ą"
    			},
    			depthres: "ł_Depth Resolution______ą",
    			depthdu: {
    				caption: "ł_Depth Distance Units_______ą",
    				meters: "ł_Meters___ą",
    				feet: "ł_Feet__ą"
    			},   			
    			depthem: {
    				caption: "ł_Depth Encoding Method_______ą",
    				explicit: "ł_Explicit depth coordinate included with horizontal coordinates____________________ą",
    				implicit: "ł_Implicit coordinate_______ą",
    				attribute: "ł_Attribute values______ą"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "ł_Time Period Information________ą",
    	sngdate: "ł_Single Date____ą",
    	mdattim: "ł_Multiple Dates_____ą",
    	rngdates: "ł_Date Range____ą",
    	caldate: "ł_Date__ą",
    	time: "ł_Time__ą",
    	begdate: "ł_Beginning Date_____ą",
    	begtime: "ł_Beginning Time_____ą",
    	enddate: "ł_Ending Date____ą",
    	endtime: "ł_Ending Time____ą"
    }
   
  })
);
