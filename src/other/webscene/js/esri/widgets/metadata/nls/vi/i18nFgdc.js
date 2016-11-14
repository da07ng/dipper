define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "Đ_FGDC__ớ",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "Đ_None__ớ",
    	notComplete: "Đ_Not complete_____ớ",
    	other: "Đ_Other___ớ",
    	present: "Đ_Present___ớ",
    	unknown: "Đ_Unknown___ớ",
    	unpublishedMaterial: "Đ_Unpublished material_______ớ"
    },
    
    hints: {
    	integerGreaterThanOne: "Đ_(enter an integer > 1)________ớ",
    	integer0To100: "Đ_(enter an integer 0..100)_________ớ"
    },
    
    citeinfo: {
    	caption: "Đ_Citation Information_______ớ",
    	origin: "Đ_Originator____ớ",
    	pubdate: "Đ_Publication Date______ớ",
    	pubtime: "Đ_Publication Time______ớ",
    	title: "Đ_Title___ớ",
    	edition: "Đ_Edition___ớ",
    	geoform: {
    		caption: "Đ_Geospatial Data Presentation Form___________ớ",
    		atlas: "Đ_Atlas___ớ",
    		audio: "Đ_Audio___ớ",
    		diagram: "Đ_Diagram___ớ",
    		sDocument: "Đ_Document___ớ",
    		globe: "Đ_Globe___ớ",
    		map: "Đ_Map__ớ",
    		model: "Đ_Model___ớ",
    		multiMediaPresentation: "Đ_Multimedia presentation________ớ",
    		profile: "Đ_Profile___ớ",
    		rasterDigitalData: "Đ_Raster digital data_______ớ",
    		remoteSensingImage: "Đ_Remote-sensing image_______ớ",
    		section: "Đ_Section___ớ",
    		spreadsheet: "Đ_Spreadsheet____ớ",
    		tabularDigitalData: "Đ_Tabular digital data_______ớ",
    		vectorDigitalData: "Đ_Vector digital data_______ớ",
    		video: "Đ_Video___ớ",
    		view: "Đ_View__ớ"
    	},
    	serinfo: {
    		caption: "Đ_Series Information______ớ",
    		sername: "Đ_Series Name____ớ",
    		issue: "Đ_Issue Identification_______ớ"
    	},
    	pubinfo: {
    		caption: "Đ_Publication Information________ớ",
    		pubplace: "Đ_Publication Place______ớ",
    		publish: "Đ_Publisher____ớ"
    	},
    	othercit: "Đ_Other Citation Details________ớ",
    	onlink: "Đ_Online Linkage (URL)_______ớ"
    },
    
    cntinfo: {
    	caption: "Đ_Contact Information_______ớ",
    	section: {
    		primary: "Đ_Primary___ớ",
    		phoneAndEmail: "Đ_Phone and E-Mail______ớ",
    		hoursAndInstructions: "Đ_Hours and Instructions________ớ"
    	},
    	cntorgp: {
    		caption: "Đ_By organization______ớ",
    		cntorg: "Đ_Organization_____ớ",
    		cntper: "Đ_Person___ớ"
    	},
    	cntperp: {
    		caption: "Đ_By person____ớ",
    		cntper: "Đ_Person___ớ",
    		cntorg: "Đ_Organization_____ớ"
    	},
    	cntpos: "Đ_Position___ớ",
    	cntaddr: {
    		caption: "Đ_Address___ớ",
    		addrtype: {
    			caption: "Đ_Address Type_____ớ",
    			mailing: "Đ_Mailing___ớ",
    			physical: "Đ_Physical___ớ",
    			mailingAndPhysical: "Đ_Mailing and Physical_______ớ"
    		},
    		address: "Đ_Address___ớ",
    		city: "Đ_City__ớ",
    		state: "Đ_State___ớ",
    		postal: "Đ_Postal Code____ớ",
    		country: "Đ_Country___ớ"
    	},
    	cntvoice: "Đ_Voice___ớ",
    	cnttdd: "Đ_TDD/TTY Telephone (hearing impaired)____________ớ",
    	cntfax: "Đ_Fax__ớ",
    	cntemail: "Đ_E-Mail Address_____ớ",
    	hours: "Đ_Hours___ớ",
    	cntinst: "Đ_Instructions_____ớ"
    },
    
    dataqual: {
    	caption: "Đ_Data Quality Information________ớ",
    	section: {
    		attributeAccuracy: "Đ_Attribute Accuracy______ớ",
    		logicalConsistency: "Đ_Logical Consistency_______ớ",
    		completeness: "Đ_Completeness_____ớ",
    		positionalAccuracy: "Đ_Positional Accuracy_______ớ",
    		lineage: "Đ_Lineage___ớ",
    		cloudCover: "Đ_Cloud Cover____ớ"
    	},
    	attracc: {
    		caption: "Đ_Attribute Accuracy______ớ",
    		attraccr: "Đ_Attribute Accuracy Report_________ớ",
    		qattracc: {
    			caption: "Đ_Quantitative Attribute Accuracy Assessment______________ớ",
    			attraccv: "Đ_Attribute Accuracy Value________ớ",
    			attracce: "Đ_Attribute Accuracy Explanation__________ớ"
    		}
    	},
    	logic: "Đ_Logical Consistency Report_________ớ",
    	complete: "Đ_Completeness Report_______ớ",
    	posacc: "Đ_Positional Accuracy_______ớ",
    	horizpa: {
    		caption: "Đ_Horizontal Positional Accuracy__________ớ",
    		horizpar: "Đ_Horizontal Positional Accuracy Report____________ớ",
    		qhorizpa: {
    			caption: "Đ_Quantitative Horizontal Positional Accuracy Assessment_________________ớ",
    			horizpav: "Đ_Horizontal Positional Accuracy Value____________ớ",
    			horizpae: "Đ_Horizontal Positional Accuracy Explanation______________ớ"
    		}
    	},
    	vertacc: {
    		caption: "Đ_Vertical Positional Accuracy_________ớ",
    		vertaccr: "Đ_Vertical Positional Accuracy Report____________ớ",
    		qvertpa: {
    			caption: "Đ_Quantitative Vertical Positional Accuracy Assessment_________________ớ",
    			vertaccv: "Đ_Vertical Positional Accuracy Value___________ớ",
    			vertacce: "Đ_Vertical Positional Accuracy Explanation_____________ớ"
    		}
    	},
    	lineage: {
    		caption: "Đ_Lineage___ớ"
    	},
    	srcinfo: {
    		caption: "Đ_Source Information______ớ",
    		srccite: "Đ_Source Citation______ớ",
    		srcscale: "Đ_Source Scale Denominator________ớ",
    		typesrc: {
    			caption: "Đ_Type of Source Media_______ớ",
    			paper: "Đ_Paper___ớ",
    			stableBaseMaterial: "Đ_Stable-base material_______ớ",
    			microfiche: "Đ_Microfiche____ớ",
    			microfilm: "Đ_Microfilm____ớ",
    			audiocassette: "Đ_Audio cassette_____ớ",
    			chart: "Đ_Chart___ớ",
    			filmstrip: "Đ_Film strip____ớ",
    			transparency: "Đ_Transparency_____ớ",
    			videocassette: "Đ_Video cassette_____ớ",
    			videodisc: "Đ_Video disc____ớ",
    			videotape: "Đ_Video tape____ớ",
    			physicalModel: "Đ_Physical model_____ớ",
    			computerProgram: "Đ_Computer program______ớ",
    			disc: "Đ_Disc__ớ",
    			cartridgeTape: "Đ_Cartridge tape_____ớ",
    			magneticTape: "Đ_Magnetic tape_____ớ",
    			online: "Đ_Online___ớ",
    			cdrom: "Đ_CD-ROM___ớ",
    			electronicBulletinBoard: "Đ_Electronic bulletin board_________ớ",
    			electronicMailSystem: "Đ_Electronic mail system________ớ"
    		},
    		srctime: "Đ_Source Time Period of Content__________ớ",
    		srccurr: "Đ_Source Currentness Reference_________ớ",
    		srccitea: "Đ_Source Citation Abbreviation_________ớ",
    		srccontr: "Đ_Source Contribution_______ớ"
    	},
    	procstep: {
    		caption: "Đ_Process Step_____ớ",
    		procdesc: "Đ_Process Description_______ớ",
    		srcused: "Đ_Source Used Citation Abbreviation___________ớ",
    		procdate: "Đ_Process Date_____ớ",
    		proctime: "Đ_Process Time_____ớ",
    		srcprod: "Đ_Source Produced Citation Abbreviation____________ớ",
    		proccont: "Đ_Process Contact______ớ"
    	},
    	cloud: "Đ_Cloud Cover____ớ"
    },
    
    distinfo: {
    	caption: "Đ_Distribution Information________ớ",
    	section: {
    		distributor: "Đ_Distributor____ớ",
    		description: "Đ_Description____ớ",
    		orderProcess: "Đ_Order Process_____ớ",
    		prerequisites: "Đ_Prerequisites_____ớ",
    		availability: "Đ_Availability_____ớ"
    	},
    	distrib: "Đ_Distributor____ớ",
    	resdesc: {
    		caption: "Đ_Resource Description_______ớ",
    		liveData: "Đ_Live Data and Maps______ớ",
    		downloadableData: "Đ_Downloadable Data______ớ",
    		offlineData: "Đ_Offline Data_____ớ",
    		staticMapImages: "Đ_Static Map Images______ớ",
    		sDocument: "Đ_Other Documents______ớ",
    		application: "Đ_Applications_____ớ",
    		geographicService: "Đ_Geographic Services_______ớ",
    		clearingHouse: "Đ_Clearinghouses_____ớ",
    		mapFiles: "Đ_Map Files____ớ",
    		geographicActivies: "Đ_Geographic Activities_______ớ"
    	},
    	distliab: "Đ_Distribution Liability Statement___________ớ",
    	custom: "Đ_Custom Order Process_______ớ",
    	techpreq: "Đ_Technical Prerequisites________ớ",
    	availabl: "Đ_Availability_____ớ"
    },
    
    eainfo: {
    	caption: "Đ_Entity and Attribute Information___________ớ",
    	overview: "Đ_Overview Description_______ớ",
    	eaover: "Đ_Entity and Attribute Overview__________ớ",
    	eadetcit: "Đ_Entity and Attribute Detail Citation____________ớ"
    },
    
    idinfo: {
    	caption: "Đ_Identification Information_________ớ",
    	section: {
    		timeAndStatus: "Đ_Time and Status______ớ",
    		constraints: "Đ_Constraints____ớ",
    		contact: "Đ_Contact___ớ",
    		additional: "Đ_Additional____ớ"
    	},
    	citeinfo: "Đ_Citation___ớ",
    	descript: {
    		caption: "Đ_Description____ớ",
    		sAbstract: "Đ_Abstract___ớ",
    		purpose: "Đ_Purpose___ớ",
    		supplinf: "Đ_Supplemental Information________ớ"
    	},
    	timeperd: {
    		caption: "Đ_Time Period of Content________ớ",
    		current: {
    			caption: "Đ_Currentness Reference_______ớ",
    			groundCondition: "Đ_Ground Condition______ớ",
    			publicationDate: "Đ_Publication Date______ớ"
    		}
    	},
    	status: {
    		caption: "Đ_Status___ớ",
    		progress: {
    			caption: "Đ_Progress___ớ",
     			complete: "Đ_Complete___ớ",
    			inWork: "Đ_In work___ớ",
    			planned: "Đ_Planned___ớ"
    		},
    		update: {
    			caption: "Đ_Maintenance and Update Frequency___________ớ",
    			continual: "Đ_Continual____ớ",
    			daily: "Đ_Daily___ớ",
    			weekly: "Đ_Weekly___ớ",
    			monthly: "Đ_Monthly___ớ",
    			annually: "Đ_Annually___ớ",
    			unknown: "Đ_Unknown___ớ",
    			asNeeded: "Đ_As needed____ớ",
    			irregular: "Đ_Irregular____ớ",
    			nonePlanned: "Đ_None planned_____ớ"
    		}
    	},
    	spdom: {
    		caption: "Đ_Extent___ớ",
    		bounding: {
    			caption: "Đ_Bounding Coordinates_______ớ",
    			westbc: "Đ_West Bounding Longitude________ớ",
    			eastbc: "Đ_East Bounding Longitude________ớ",
    			northbc: "Đ_North Bounding Latitude________ớ",
    			southbc: "Đ_South Bounding Latitude________ớ"
    		}
    	},
      keywords: {
        caption: "Từ khóa",
        theme: "Chủ đề",
        place: "Địa điểm",
        stratum: "Địa tầng",
        temporal: "Thời gian",
        thesaursus: "Từ điển chuyên đề Liên quan",
        delimited: "Từ khóa",
        themektIsoTopicCategory: "Chủ đề ISO...",
        themektIsoTopicDialog: "Chủ đề ISO",
        placektGnis: "Hệ thống Thông tin Tên Địa lý"
      },
      accconst: "Ràng buộc Truy cập",
      useconst: "Ràng buộc về sử dụng",
      ptcontac: "Đầu mối Liên hệ về Tài nguyên",
      browse: {
      	caption: "Đ_Browse Graphic_____ớ",
      	browsen: "Đ_Browse Graphic URL______ớ",
      	browsed: "Đ_Browse Graphic File Description__________ớ",
      	browset: "Đ_Browse Graphic File Type________ớ"
      },
      datacred: "Tín dụng Tập Dữ liệu",
      secinfo: {
      	caption: "Đ_Security Information_______ớ",
      	secsys: "Đ_Security Classification System__________ớ",
      	secclass: {
      		caption: "Đ_Security Classification________ớ",
      		topSecret: "Đ_Top secret____ớ",
      		secret: "Đ_Secret___ớ",
      		confidential: "Đ_Confidential_____ớ",
      		restricted: "Đ_Restricted____ớ",
      		unclassified: "Đ_Unclassified_____ớ",
      		sensitive: "Đ_Sensitive____ớ"
      	},
      	sechandl: "Đ_Security Handling Description__________ớ"
      },
      sNative: "Môi trường Tập Dữ liệu Bản địa",
      crossref: "Tham chiếu Chéo"
    },
    
    metadata: {
    	idinfo: "Đ_Identification_____ớ",
    	dataqual: "Đ_Quality___ớ",
    	spdoinfo: "Đ_Spatial Data Organization_________ớ",
    	spref: "Đ_Spatial Reference______ớ",
    	eainfo: "Đ_Entity and Attribute_______ớ",
    	distinfo: "Đ_Distribution_____ớ",
    	metainfo: "Đ_Metadata___ớ"
    },
    
    metainfo: {
    	caption: "Đ_Metadata Information_______ớ",
    	section: {
    		dates: "Đ_Metadata Dates_____ớ",
    		contact: "Đ_Metadata Contact______ớ",
    		standard: "Đ_Metadata Standard______ớ",
    		additional: "Đ_Additional____ớ"
    	},
      metd: "Ngày Siêu dữ liệu",
      metrd: "Ngày Xem xét Siêu dữ liệu",
      metfrd: "Ngày Xem xét Siêu dữ liệu trong Tương lai",
      metstdn: "Tên Tiêu chuẩn Siêu dữ liệu",
      metstdv: "Phiên bản Tiêu chuẩn Siêu dữ liệu",
      metac: "Ràng buộc Truy cập Siêu dữ liệu",
      metuc: "Ràng buộc Sử dụng Siêu dữ liệu",
      metsi: {
      	caption: "Đ_Metadata Security Information__________ớ",
      	metscs: "Đ_Metadata Security Classification System_____________ớ",
      	metsc: "Đ_Metadata Security Classification___________ớ",
      	metshd: "Đ_Metadata Security Handling Description____________ớ"
      }
    },
    
    spref: {
    	caption: "Đ_Spatial Reference Information__________ớ",
    	horizsys: {
    		caption: "Đ_Horizontal Coordinate System_________ớ",
    		geograph: {
    			caption: "Đ_Geographic____ớ",
    			latres: "Đ_Latitude Resolution_______ớ",
    			longres: "Đ_Longitude Resolution_______ớ",
    			geogunit: {
    				caption: "Đ_Geographic Coordinate Units_________ớ",
    				decimalDegrees: "Đ_Decimal degrees______ớ",
    				decimalMinutes: "Đ_Decimal minutes______ớ",
    				decimalSeconds: "Đ_Decimal seconds______ớ",
    				degreesAndDecimalMinutes: "Đ_Degrees and decimal minutes_________ớ",
    				degreesMinutesAndDecimalSeconds: "Đ_Degrees, minutes, and decimal seconds____________ớ",
    				radians: "Đ_Radians___ớ",
    				grads: "Đ_Grads___ớ"
    			}
    		},
    		planar: {
    			caption: "Đ_Planar___ớ"
    		},
    		local: {
    			caption: "Đ_Local___ớ",
    			localdes: "Đ_Local Description______ớ",
    			localgeo: "Đ_Local Georeference Information__________ớ"
    		},
    		geodetic: {
    			caption: "Đ_Geodetic Model_____ớ",
    			horizdn: {
    				caption: "Đ_Horizontal Datum Name_______ớ",
    				nad83: "Đ_North American Datum of 1983_________ớ",
    				nad27: "Đ_North American Datum of 1927_________ớ"
    			},
    			ellips: {
    				caption: "Đ_Ellipsoid Name_____ớ",
    				grs80: "Đ_Geodetic Reference System 80_________ớ",
    				clarke1866: "Đ_Clarke 1866____ớ"
    			},
    			semiaxis: "Đ_Semi-major Axis______ớ",
    			denflat: "Đ_Denominator of Flattening Ratio__________ớ"
    		}
    	},
    	vertdef: {
    		caption: "Đ_Vertical Coordinate System_________ớ",
    		altsys: {
    			caption: "Đ_Altitude System______ớ",
    			altdatum: {
    				caption: "Đ_Altitude Datum Name_______ớ",
    				navd88: "Đ_North American Vertical Datum of 1988____________ớ",
    				ngvd29: "Đ_National Geodetic Vertical Datum of 1929_____________ớ"
    			},
    			altres: "Đ_Altitude Resolution_______ớ",
    			altunits: {
    				caption: "Đ_Altitude Distance Units________ớ",
    				meters: "Đ_Meters___ớ",
    				feet: "Đ_Feet__ớ"
    			},
    			altenc: {
    				caption: "Đ_Altitude Encoding Method________ớ",
    				explicit: "Đ_Explicit elevation coordinate included with horizontal coordinates_____________________ớ",
    				implicit: "Đ_Implicit coordinate_______ớ",
    				attribute: "Đ_Attribute values______ớ"
    			}
    		},
    		depthsys: {
    			caption: "Đ_Depth System_____ớ",
    			depthdn: {
    				caption: "Đ_Depth Datum Name______ớ",
    				option1: "Đ_Local surface_____ớ", 
    				option2: "Đ_Chart datum; datum for sounding reduction_____________ớ", 
    				option3: "Đ_Lowest astronomical tide________ớ", 
    				option4: "Đ_Highest astronomical tide_________ớ", 
    				option5: "Đ_Mean low water_____ớ", 
    				option6: "Đ_Mean high water______ớ", 
    				option7: "Đ_Mean sea level_____ớ", 
    				option8: "Đ_Land survey datum______ớ", 
    				option9: "Đ_Mean low water springs________ớ", 
    				option10: "Đ_Mean high water springs________ớ", 
    				option11: "Đ_Mean low water neap_______ớ", 
    				option12: "Đ_Mean high water neap_______ớ", 
    				option13: "Đ_Mean lower low water_______ớ", 
    				option14: "Đ_Mean lower low water springs_________ớ", 
    				option15: "Đ_Mean higher high water________ớ", 
    				option16: "Đ_Mean higher low water_______ớ", 
    				option17: "Đ_Mean lower high water_______ớ", 
    				option18: "Đ_Spring tide____ớ", 
    				option19: "Đ_Tropic lower low water________ớ", 
    				option20: "Đ_Neap tide____ớ", 
    				option21: "Đ_High water____ớ", 
    				option22: "Đ_Higher high water______ớ", 
    				option23: "Đ_Low water____ớ", 
    				option24: "Đ_Low-water datum______ớ", 
    				option25: "Đ_Lowest low water______ớ", 
    				option26: "Đ_Lower low water______ớ", 
    				option27: "Đ_Lowest normal low water________ớ", 
    				option28: "Đ_Mean tide level______ớ", 
    				option29: "Đ_Indian spring low water________ớ", 
    				option30: "Đ_High-water full and charge_________ớ", 
    				option31: "Đ_Low-water full and charge_________ớ", 
    				option32: "Đ_Columbia River datum_______ớ", 
    				option33: "Đ_Gulf Coast low water datum_________ớ", 
    				option34: "Đ_Equatorial springs low water_________ớ", 
    				option35: "Đ_Approximate lowest astronomical tide____________ớ", 
    				option36: "Đ_No correction_____ớ"
    			},
    			depthres: "Đ_Depth Resolution______ớ",
    			depthdu: {
    				caption: "Đ_Depth Distance Units_______ớ",
    				meters: "Đ_Meters___ớ",
    				feet: "Đ_Feet__ớ"
    			},   			
    			depthem: {
    				caption: "Đ_Depth Encoding Method_______ớ",
    				explicit: "Đ_Explicit depth coordinate included with horizontal coordinates____________________ớ",
    				implicit: "Đ_Implicit coordinate_______ớ",
    				attribute: "Đ_Attribute values______ớ"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "Đ_Time Period Information________ớ",
    	sngdate: "Đ_Single Date____ớ",
    	mdattim: "Đ_Multiple Dates_____ớ",
    	rngdates: "Đ_Date Range____ớ",
    	caldate: "Đ_Date__ớ",
    	time: "Đ_Time__ớ",
    	begdate: "Đ_Beginning Date_____ớ",
    	begtime: "Đ_Beginning Time_____ớ",
    	enddate: "Đ_Ending Date____ớ",
    	endtime: "Đ_Ending Time____ớ"
    }
   
  })
);
